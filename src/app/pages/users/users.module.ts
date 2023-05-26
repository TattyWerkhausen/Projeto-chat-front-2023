import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateUserComponent } from './update-user/update-user.component';
import { SeeUsersComponent } from './see-users/see-users.component';
import { RemoveUserComponent } from './remove-user/remove-user.component';
import { LoginComponent } from '../login/login.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    UsersComponent,
    AddUserComponent,
    UpdateUserComponent,
    SeeUsersComponent,
    RemoveUserComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
  ]
})
export class UsersModule { }
