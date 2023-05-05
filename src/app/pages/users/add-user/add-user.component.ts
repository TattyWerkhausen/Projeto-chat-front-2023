import { DataUserModel } from './../models/data-user-model';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  form: FormGroup;

  constructor(
    private userService: UserService, private formBuilder: FormBuilder, private _router: Router) {
    this.form = formBuilder.group({
      name: formBuilder.control(''),
      email: formBuilder.control(''),
    });
  }

  ngOnInit() {}
  register(): void {
    const user = new DataUserModel(
      this.form.controls['name'].value,
      this.form.controls['email'].value
    );
    this.userService.addUser(user).subscribe(regist => {
     // next: () => this.onSubmitSuccess()
     this._router.navigateByUrl('/users')
    })
  }
  onSubmitSuccess(): void {
    this._router.navigateByUrl('/users');
  }
}
