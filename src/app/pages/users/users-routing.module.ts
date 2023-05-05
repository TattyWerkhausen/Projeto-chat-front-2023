import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { SeeUsersComponent } from './see-users/see-users.component';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'see-users', component: SeeUsersComponent },
  { path: ':id/update-user', component: UpdateUserComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
