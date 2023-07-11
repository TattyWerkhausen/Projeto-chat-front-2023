import { Routes, RouterModule } from '@angular/router';
import { SendMessageComponent } from './send-message/send-message.component';
import { NgModule } from '@angular/core';
import { EditMessageComponent } from './edit-message/edit-message.component';
import { ExcluirMessageComponent } from './excluir-message/excluir-message.component';

const routes: Routes = [
  { path: 'send/:id', component: SendMessageComponent },
  { path: ':id/edit/:idUserReceive', component: EditMessageComponent },
  { path: ':id/delete/:idUserReceive/:idUserSend', component: ExcluirMessageComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessageRoutingModule {}
