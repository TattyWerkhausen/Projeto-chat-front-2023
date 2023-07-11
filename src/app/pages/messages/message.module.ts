import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SendMessageComponent } from './send-message/send-message.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageRoutingModule } from './message-routing.module';
import { EditMessageComponent } from './edit-message/edit-message.component';
import { ExcluirMessageComponent } from './excluir-message/excluir-message.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MessageRoutingModule
  ],
  declarations: [
    SendMessageComponent,
    EditMessageComponent,
    ExcluirMessageComponent
  ]
})
export class MessageModule { }
