import { ILogin } from './../login/i-login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import { FormGroup } from '@angular/forms';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  form!: FormGroup;
  isLoggedIn!: boolean;
  user!: ILogin;

  constructor(private _loginService: LoginService, private _router: Router) {}

  ngOnInit(): void {
    const emailExistent = localStorage.getItem('email');
    const passwordExistent = localStorage.getItem('password');

    this.user = new ILogin(emailExistent!, passwordExistent!);
    this._loginService.login(this.user).subscribe({
      next: () => {
        if (this.user.email !== null && this.user.password !== null)
          this.isLoggedIn = true;
      },
    });
  }
  logout(): void {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    window.location.reload();
    this._router.navigateByUrl('/home');
  }
}
