import { Component, OnInit } from '@angular/core';
import { IDataUserModel } from '../models/data-user-model';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
})
export class UpdateUserComponent implements OnInit {
  userId!: string;
  user!: IDataUserModel;

  constructor(
    private _activedRouter: ActivatedRoute,
    private _userService: UserService
  ) {
    this.userId = _activedRouter.snapshot.params['id'];
  }

  ngOnInit(): void {}
  dataUser(): void {
    this._userService.getUserById(this.userId).subscribe({
      next:(result) => this.user = result
    });
  }
}
