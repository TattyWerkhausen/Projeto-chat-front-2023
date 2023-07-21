import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILogin } from './i-login';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private _httpClient: HttpClient, private _router: Router) {}
  api = 'https://localhost:7237/api/Login/';
  loggedUser?: string;
  userEmail?: string;
  form!: FormGroup;
  user!: ILogin;
  errorMessage = 'Usúario não existente';
  showErrorMessage = false;
  showRegister = false;
  isLoggedIn!: boolean;

  login(user: ILogin): Observable<any> {
    return this._httpClient.post<any>(this.api, user);
  }
  logout(): void {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    window.location.reload();
  }
  existingLogin(): void {
    const emailExistent = localStorage.getItem('email');
    const passwordExistent = localStorage.getItem('password');

    this.user = new ILogin(emailExistent!, passwordExistent!);
    if (this.user.email !== null && this.user.password !== null)
      this.login(this.user).subscribe({
        next: (apiResult) => {
          this.saveResult(apiResult.id);
          this.isLoggedIn = true;
          this.userEmail = apiResult.email;
        },
      });
  }
  saveResult(id: string) {
    this.loggedUser = id;
  }
}
