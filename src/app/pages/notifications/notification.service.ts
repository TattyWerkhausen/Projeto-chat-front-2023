import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private _httpClient:HttpClient) { }
  api = 'https://localhost:7237/api/Notification/';

  searchNotifications(userLogged:string):Observable<any>{
    return this._httpClient.get<any>(this.api + userLogged);
  }
}
