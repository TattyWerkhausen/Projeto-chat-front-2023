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
    private _loginService: LoginService,
    private _userService: UserService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._loginService.existingLogin();
  }
  ifLoggedIn(): boolean {
    this.logged = this._loginService.isLoggedIn;
    return this.logged;
  }
  ifNeedOpenRegister(): boolean {
    return this._loginService.showRegister;
  }
}
