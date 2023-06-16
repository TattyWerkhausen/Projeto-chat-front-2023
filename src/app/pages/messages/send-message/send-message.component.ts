import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  constructor(
    private _messageService: MessageService,
    private _loginService: LoginService,
    private _formBuilder: FormBuilder,
    private _activedRota: ActivatedRoute
  ) {
    this.idUserReceiveMessage = _activedRota.snapshot.params['id'];
    console.log(this.idUserReceiveMessage);

    this.form = _formBuilder.group({
      content: _formBuilder.control(''),
    });
  }

  ngOnInit() {
  }
  send(): void {
    this.idUserSend = this._loginService.loggedUser;
    console.log('user send')
    console.log(this._loginService.loggedUser)

    var message = new DataMessageModel(
      this.idUserSend!,
      this.idUserReceiveMessage!,
      this.form.controls['content'].value
    );

    this._messageService.send(message).subscribe({
      next: (result) => (this.messages = result),
    });
    this.form.reset();
  }
}
