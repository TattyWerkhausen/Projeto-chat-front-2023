import { Component, OnInit } from '@angular/core';
import { IDataUserModel } from '../models/data-user-model';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { ISearchAllUsersModel } from '../models/i-search-all-users-model';

@Component({
  selector: 'app-see-users',
  templateUrl: './see-users.component.html',
  styleUrls: ['./see-users.component.css']
})
export class SeeUsersComponent implements OnInit {
  users:ISearchAllUsersModel[]=[];
  constructor( private _activedRouter: ActivatedRoute,
    private _userService: UserService) { }

  ngOnInit(): void {
    this.searchUsers();
    console.log(this.searchUsers())
  }
  searchUsers():void{
    this._userService.searchUsers('').subscribe({
      next:(result) => { this.users = result}
    })
  }
}
