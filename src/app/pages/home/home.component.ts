import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(public loginService: LoginService) {}

  ngOnInit(): void {}
  logout(): void {
    this.loginService.logout();
  }
  register():void{
    this.loginService.showRegister = true;
  }
}
