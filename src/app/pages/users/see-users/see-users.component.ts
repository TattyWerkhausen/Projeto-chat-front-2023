import { Component, OnInit } from '@angular/core';
import { IDataUserModel } from '../models/data-user-model';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { ISearchAllUsersModel } from '../models/i-search-all-users-model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-see-users',
  templateUrl: './see-users.component.html',
  styleUrls: ['./see-users.component.css']
})
export class SeeUsersComponent implements OnInit {
  users:ISearchAllUsersModel[]=[];
  form:FormGroup;
  searchKey: string = ''

  constructor( private _activedRouter: ActivatedRoute,
    private _userService: UserService,
    private _formBuilder:FormBuilder) {
      this.form = _formBuilder.group({
        name: _formBuilder.control('')
      });
     }

  ngOnInit(): void {
   this.searchUsers();
  }
  searchUsers():void{
    const searchKey = this.form.controls['name'].value;
    this._userService.searchUsers({name: searchKey}).subscribe({
      next:(result) => { this.users = result}
    })
  }
}
