import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DataMessageModel } from '../models/DataMessageModel';

@Component({
  selector: 'app-excluir-message',
  templateUrl: './excluir-message.component.html',
  styleUrls: ['./excluir-message.component.css'],
})
export class ExcluirMessageComponent implements OnInit {
  messageId?: string;
  message!: DataMessageModel;
  idUserSelected?:string;

  constructor(
    private _messageService: MessageService,
    private _activatedRoute: ActivatedRoute,
    private _router:Router
  ) {
    this.messageId = _activatedRoute.snapshot.params['id'];
    this.idUserSelected = _activatedRoute.snapshot.params['idUserReceive'];

    _messageService.getMessageById(this.messageId!).subscribe({
      next: (result) => {
        this.message = result;
        console.log(this.message);
      },
    });
  }

  ngOnInit() {}
  delete(): void {
    this._messageService.deleteMessage(this.messageId!).subscribe({
      next:() => this._router.navigateByUrl('/messages/send/' +  this.idUserSelected)
    })
  }
  noDelete():void{
    this._router.navigateByUrl('/messages/send/' +  this.idUserSelected);
  }
}
