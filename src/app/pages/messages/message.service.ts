import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  DataMessageModel,
  DataMessageModelEdit,
} from './models/DataMessageModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor(private _httpClient: HttpClient) {}
  api = 'https://localhost:7237/api/Message/';

  send(data: DataMessageModel): Observable<any> {
    return this._httpClient.post<any>(this.api, data);
  }
  allMessages(userSend: string, userReceive: string): Observable<any> {
    return this._httpClient.get<any>(this.api + userSend + '/' + userReceive);
  }
  getMessageById(messageId: string): Observable<DataMessageModel> {
    return this._httpClient.get<DataMessageModel>(this.api + messageId);
  }
  editMessage(message: DataMessageModelEdit): Observable<any> {
    return this._httpClient.put<any>(this.api, message);
  }
  deleteMessage(id: string): Observable<any> {
    return this._httpClient.delete<any>(this.api + id);
  }
}
