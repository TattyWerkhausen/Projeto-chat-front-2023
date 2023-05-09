import { IDataUserModel } from './../models/data-user-model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
})
export class UpdateUserComponent implements OnInit {
  form:FormGroup;
  userId!: string;
  user!: IDataUserModel;

  constructor(
    private _activedRouter: ActivatedRoute,
    private _userService: UserService,
    private _formBuilder:FormBuilder,
    private _router: Router
  ) {
    this.form = _formBuilder.group({
      name: _formBuilder.control(''),
      email: _formBuilder.control('')
    })
    this.userId = _activedRouter.snapshot.params['id'];
    this._userService.getUserById(this.userId).subscribe({
      next:(result) => {this.user = result
      this._fillOutForm();
      }
    });
  }
  private _fillOutForm() {
   this.form.controls['name'].setValue(this.user.name);
   this.form.controls['email'].setValue(this.user.email);
  }

  ngOnInit(): void {}

  updateUser():void{
    const name = this.form.controls['name'].value;
    const email = this.form.controls['email'].value;

    const newDataUser = new IDataUserModel(
      name, email
    );
    this._userService.updateUser(this.userId, newDataUser).subscribe({
      next:() => this._router.navigateByUrl('/users')
    })
  }
}
