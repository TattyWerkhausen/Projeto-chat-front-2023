import { Component } from '@angular/core';
import { LoginService } from './pages/login/login.service';
import { UserService } from './pages/users/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ProjectChat.Client';
  logged!: boolean;

  constructor(
    public loginService: LoginService,
    public userService: UserService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.loginService.existingLogin();
  }
  ifLoggedIn(): boolean {
    const emailExistent = localStorage.getItem('email');
    const passwordExistent = localStorage.getItem('password');

    const emailOk = emailExistent !== null && emailExistent !== undefined;
    const passwordOk =
      passwordExistent !== null && passwordExistent !== undefined;
    if (emailOk && passwordOk) this.logged = true;
    return this.logged;
  }
  ifRegister(): boolean {
    return this.loginService.showRegister;
  }
}
