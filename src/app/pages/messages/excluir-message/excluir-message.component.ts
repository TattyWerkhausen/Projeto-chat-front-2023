import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataMessageModel } from '../models/DataMessageModel';
import { LoginService } from '../../login/login.service';

@Component({
  selector: 'app-excluir-message',
  templateUrl: './excluir-message.component.html',
  styleUrls: ['./excluir-message.component.css'],
})
export class ExcluirMessageComponent implements OnInit {
  messageId?: string;
  message?: DataMessageModel;
  idUserReceive?: string;
  idUserSelected?: string;
  idUserSend?: string;
  idUserLogado?: string;

  constructor(
    private _messageService: MessageService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _loginService: LoginService
  ) {
    this.messageId = _activatedRoute.snapshot.params['id'];
    this.idUserReceive = _activatedRoute.snapshot.params['idUserReceive'];
    this.idUserSend = _activatedRoute.snapshot.params['idUserSend'];

    this.idUserLogado = this._loginService.loggedUser;

    if (this.idUserReceive !== this.idUserLogado) {
      this.idUserSelected = this.idUserReceive;
    } else {
      this.idUserSelected = this.idUserSend;
    }

    _messageService.getMessageById(this.messageId!).subscribe({
      next: (result) => {
        this.message = result;
      },
    });
  }

  ngOnInit() {}
  delete(): void {
    this._messageService.deleteMessage(this.messageId!).subscribe({
      next: () => {
        this._router.navigateByUrl('/messages/send/' + this.idUserSelected);
      },
    });
  }
  noDelete(): void {
    this._router.navigateByUrl('/messages/send/' + this.idUserSelected);
  }
}
