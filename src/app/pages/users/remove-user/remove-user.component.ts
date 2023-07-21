import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IDataUserModel } from '../models/data-user-model';

@Component({
  selector: 'app-remove-user',
  templateUrl: './remove-user.component.html',
  styleUrls: ['./remove-user.component.css'],
})
export class RemoveUserComponent implements OnInit {
  userId!: string;
  user!: IDataUserModel;

  constructor(
    private _userService: UserService,
    private _activedRouter: ActivatedRoute,
    private _router: Router
  ) {
    this.userId = _activedRouter.snapshot.params['id'];
    _userService.getUserById(this.userId).subscribe({
      next: (result) => {
        this.user = result;
      },
    });
  }

  ngOnInit(): void {}
  deleteUser(): void {
    this._userService.deleteUser(this.userId).subscribe({
      next: () => this._router.navigateByUrl('/users/see-users'),
    });
  }
  noDelete(): void {
    this._router.navigateByUrl('/users/see-users');
  }
}
