import { Routes, RouterModule } from '@angular/router';
import { SendMessageComponent } from './send-message/send-message.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'send/:id', component: SendMessageComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessageRoutingModule { }
