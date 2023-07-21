import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private _loginService: LoginService) {}

  ngOnInit(): void {}
  logout(): void {
    this._loginService.logout();
  }
  register(): void {
    this._loginService.showRegister = true;
  }
}
