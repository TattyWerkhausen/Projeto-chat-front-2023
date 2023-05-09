import { DataUserModel, IDataUserModel } from './models/data-user-model';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISearchAllUsersModel } from './models/i-search-all-users-model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}
  api = 'https://localhost:7237/api/User/';

  addUser(user: DataUserModel): Observable<any> {
    return this.httpClient.post<any>(this.api, user);
  }
  getUserById(id: string): Observable<IDataUserModel> {
    return this.httpClient.get<IDataUserModel>(this.api + id);
  }
  searchUsers(name: string): Observable<ISearchAllUsersModel[]> {
    const params = new HttpParams().set('name', name);
    return this.httpClient.get<ISearchAllUsersModel[]>(this.api + 'users/', { params,});
  }
  updateUser(userId:string, userModel:IDataUserModel):Observable<any>{
    return this.httpClient.put<any>(this.api + 'update' + userId, userModel);
 }
}
