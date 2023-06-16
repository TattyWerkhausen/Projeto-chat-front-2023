import { DataUserModel } from './../models/data-user-model';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../login/login.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  form: FormGroup;
  errorMessage = 'Erro!!! Usúario não registrado, este acesso já existe!';
  showErrorMessage = false;

  constructor(
    public userService: UserService,
    public loginService: LoginService,
    private formBuilder: FormBuilder,
    private _router: Router
  ) {
    this.form = formBuilder.group({
      name: formBuilder.control('', Validators.required),
      email: formBuilder.control('', [Validators.required, Validators.email]),
      password: formBuilder.control('', Validators.required),
    });
  }

  ngOnInit() {}
  register(): void {
    if (this.form.invalid) return;

    const user = new DataUserModel(
      this.form.controls['name'].value,
      this.form.controls['email'].value,
      this.form.controls['password'].value
    );

    this.userService.addUser(user).subscribe({
      next: (result) => {
        result = this.success();
      },
      error: (error) => {
        console.log(error);
        this.error();
      },
    });
  }

  success(): void {
    this.loginService.showRegister = false;
  }
  error(): void {
    this.showErrorMessage = true;
  }
  cancel(): void {
    this.loginService.showRegister = false;
  }
  isValidation(name: string): boolean {
    if (this.form.get(name) === undefined) return true;
    return this.form.get(name)!.dirty && this.form.get(name)!.invalid;
  }
}
