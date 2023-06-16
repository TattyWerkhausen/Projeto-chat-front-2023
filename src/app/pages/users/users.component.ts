import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private _loginService:LoginService) { }

  ngOnInit(): void {
  }
  register():void{
    this._loginService.showRegister = true;
  }
}
