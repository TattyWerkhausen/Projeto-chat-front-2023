import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDataUserModel } from '../users/models/data-user-model';
import { ILogin } from './i-login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private _httpClient: HttpClient) {}
  api = 'https://localhost:7237/api/Login/';
  loggedUserId?: string;

  login(user:ILogin): Observable<any> {
    return this._httpClient.post<any>(this.api, user);
  }
}
