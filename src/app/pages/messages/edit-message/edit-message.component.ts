import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MessageService } from '../message.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DataMessageModelEdit } from '../models/DataMessageModel';
import { LoginService } from '../../login/login.service';

@Component({
  selector: 'app-edit-message',
  templateUrl: './edit-message.component.html',
  styleUrls: ['./edit-message.component.css'],
})
export class EditMessageComponent implements OnInit {
  form!: FormGroup;
  messageId!: string;
  message!: DataMessageModelEdit;
  idUserSend?: string;
  idUserSelected?: string;

  constructor(
    private _formBuilder: FormBuilder,
    private _messageService: MessageService,
    private _activedRoute: ActivatedRoute,
    private _route: Router,
    private _loginService: LoginService
  ) {
    this.form = _formBuilder.group({
      content: _formBuilder.control(''),
    });
    this.idUserSend = this._loginService.loggedUser;
    this.messageId = _activedRoute.snapshot.params['id'];
    this.idUserSelected = _activedRoute.snapshot.params['idUserReceive'];

    this._messageService.getMessageById(this.messageId).subscribe({
      next: (result) => {
        this.message = result;
        this._fillOutForm();
      },
    });
  }
  private _fillOutForm() {
    this.form.controls['content'].setValue(this.message.content);
  }

  ngOnInit() {
  }
  editMessage(): void {
    const content = this.form.controls['content'].value;
    const newContent = new DataMessageModelEdit(this.messageId, content);
    this._messageService.editMessage(newContent).subscribe({
      next: () =>
        this._route.navigateByUrl('/messages/send/' + this.idUserSelected),
    });
  }
}
