import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {  path: '', redirectTo: 'users', pathMatch: 'full'},
  {  path:'users', loadChildren: () => import('./pages/users/users.module').then(module => module.UsersModule)}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
