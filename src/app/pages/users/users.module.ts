import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateUserComponent } from './update-user/update-user.component';
import { SeeUsersComponent } from './see-users/see-users.component';
import { RemoveUserComponent } from './remove-user/remove-user.component';


@NgModule({
  declarations: [
    AddUserComponent,
    UsersComponent,
    UpdateUserComponent,
    SeeUsersComponent,
    RemoveUserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UsersModule { }
