import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MessageService } from '../message.service';
import { DataMessageModel } from '../models/DataMessageModel';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../../login/login.service';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css'],
})
export class SendMessageComponent implements OnInit {
  form!: FormGroup;
  messages: DataMessageModel[] = [];
  loggedUserId?: string;
  idUserReceiveMessage?: string;

  constructor(
    private _messageService: MessageService,
    private _loginService: LoginService,
    private _formBuilder: FormBuilder,
    private _activedRota: ActivatedRoute
  ) {
    this.idUserReceiveMessage = _activedRota.snapshot.params['idUserReceive'];
    console.log(this.idUserReceiveMessage);
    this.form = _formBuilder.group({
      content: _formBuilder.control(''),
    });
  }

  ngOnInit() {
    this.loggedUserId = this._loginService.loggedUserId;
    console.log(this.loggedUserId)
  }
  send(): void {
    var message = new DataMessageModel(
      this.loggedUserId!,
      this.idUserReceiveMessage!,
      this.form.controls['content'].value
    );

    this._messageService.send(message).subscribe({
      next: (result) => (this.messages = result),
    });
    this.form.reset();
  }
}
