import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataMessageModel } from './models/DataMessageModel';
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
    return this._httpClient.get<any>(this.api + userSend +  '/' + userReceive);
  }
}
