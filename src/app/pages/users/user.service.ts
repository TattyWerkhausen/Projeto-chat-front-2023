import { DataUserModel, IDataUserModel } from './models/data-user-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISearchAllUsersModel } from './models/i-search-all-users-model';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private _httpClient: HttpClient) {}
  api = 'https://localhost:7237/api/User/';

  addUser(user: DataUserModel): Observable<any> {
    return this._httpClient.post<any>(this.api, user);
  }
  getUserById(id: string): Observable<IDataUserModel> {
    return this._httpClient.get<IDataUserModel>(this.api + id);
  }
  searchUsers = (params: any): Observable<ISearchAllUsersModel[]> => {
    return this._httpClient.get<ISearchAllUsersModel[]>(this.api + 'users', {params});
  }
  updateUser(userModel: IDataUserModel): Observable<any> {
    return this._httpClient.put<any>(this.api, userModel);
  }
  deleteUser(id: string): Observable<any> {
    return this._httpClient.delete<any>(this.api + id);
  }
}
