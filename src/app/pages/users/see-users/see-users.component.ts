import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { ISearchAllUsersModel } from '../models/i-search-all-users-model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-see-users',
  templateUrl: './see-users.component.html',
  styleUrls: ['./see-users.component.css'],
})
export class SeeUsersComponent implements OnInit {
  users: ISearchAllUsersModel[] = [];
  form: FormGroup;
  searchKey: string = '';
  idUserReceiveMessage?: string;

  constructor(
    private _activedRouter: ActivatedRoute,
    private _userService: UserService,
    private _formBuilder: FormBuilder,
    private _router: Router
  ) {
    this.form = _formBuilder.group({
      name: _formBuilder.control(''),
    });
  }

  ngOnInit(): void {
    this.searchUsers();
  }
  searchUsers(): void {
    const searchKey = this.form.controls['name'].value;
    this._userService.searchUsers({ name: searchKey }).subscribe({
      next: (result) => {
        this.users = result;
      },
    });
  }
  selectUserForMessage(idUserOpenConversation: string): void {
    this.idUserReceiveMessage = idUserOpenConversation;
    this.openConvertation();
  }
  openConvertation(): void {
    this._router.navigateByUrl('/messages/send/' + this.idUserReceiveMessage);
  }
}
