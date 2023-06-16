import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ILogin } from './i-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  user!: ILogin;
  errorMessage = 'Usúario não existente';
  showErrorMessage = false;

  constructor(
    private _loginService: LoginService,
    private _formBuilder: FormBuilder,
    private _router: Router
  ) {
    this.form = _formBuilder.group({
      email: _formBuilder.control(''),
      password: _formBuilder.control(''),
    });
  }

  ngOnInit(): void {}
  logar(): void {
    const email = this.form.controls['email'].value;
    const password = this.form.controls['password'].value;

    this.user = this.form.value as ILogin;
    this._loginService.login(this.user).subscribe({
      next: (apiResult) => {
        this._loginService.saveResult(apiResult.id);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        this._router.navigateByUrl('/home');
      },
      error: () => {
        this.showErrorMessage = true;
      },
    });
  }
  register(): void {
    this._loginService.showRegister = true;
  }
}
