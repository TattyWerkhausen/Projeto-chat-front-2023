import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from '../message.service';
import { DataMessageModel } from '../models/DataMessageModel';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../../login/login.service';
import { IDataUserModel } from '../../users/models/data-user-model';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css'],
})
export class SendMessageComponent implements OnInit {
  form!: FormGroup;
  messages: DataMessageModel[] = [];
  idUserSend?: string;
  idUserReceiveMessage?: string;
  open = false;
  messageIsNull = false;
  messagesOpen: DataMessageModel[] = [];

  constructor(
    private _messageService: MessageService,
    private _loginService: LoginService,
    private _formBuilder: FormBuilder,
    private _activedRota: ActivatedRoute
  ) {
    this.idUserReceiveMessage = _activedRota.snapshot.params['id'];

    this.form = _formBuilder.group({
      content: _formBuilder.control('', Validators.required),
    });
  }

  ngOnInit() {
    this.messagesSee();
    // setInterval(() => {
    //   this.messagesSee();
    // }, 3000);
  }
  send(): void {
    this.idUserSend = this._loginService.loggedUser;

    var message = new DataMessageModel(
      '',
      this.idUserSend!,
      this.idUserReceiveMessage!,
      this.form.controls['content'].value
    );

    if (!this.isValidation()) {
      this.messageIsNull = true;
      return;
    }
    this._messageService.send(message).subscribe({
      next: (result) => (this.messages = result),
    });
    this.form.reset();
  }
  isValidation(): boolean {
    return this.form.get('content')!.valid;
  }
  messagesSee(): void {
    this.idUserSend = this._loginService.loggedUser;
    this._messageService
      .allMessages(this.idUserSend!, this.idUserReceiveMessage!)
      .subscribe({
        next: (result) => (this.messages = result),
      });
  }
  isMyMessage(message: DataMessageModel): boolean {
    if (this.idUserSend === message.idUserSend) return true;
    return false;
  }
  stopAlert(): void {
    this.messageIsNull = false;
  }
  openOptions(message: DataMessageModel): void {
    if (this.isOpen(message))
      this.messagesOpen = this.messagesOpen.filter(
        (itemMessageOpen) => itemMessageOpen.id !== message.id
      );
    else this.messagesOpen.push(message);
  }

  isOpen(message: DataMessageModel): boolean {
    for (let index = 0; index < this.messagesOpen.length; index++) {
      const itemMessageOpen = this.messagesOpen[index];
      if (itemMessageOpen.id === message.id) return true;
    }
    return false;
  }
}
