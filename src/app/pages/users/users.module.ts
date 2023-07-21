import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateUserComponent } from './update-user/update-user.component';
import { SeeUsersComponent } from './see-users/see-users.component';
import { RemoveUserComponent } from './remove-user/remove-user.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    UsersComponent,
    UpdateUserComponent,
    SeeUsersComponent,
    RemoveUserComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [],
})
export class UsersModule {}
