import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../_models/user.model';
import { ApiService } from '../../../services/api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthHTTPService {
  constructor(private _apiService: ApiService) {}

  login(username: string, password: string): Observable<any> {
    return this._apiService.request('post', '/auth/login', {
      username,
      password,
    });
  }

  register(user: UserModel): Observable<UserModel> {
    return this._apiService.request('post', '/auth/logout', user);
  }
}
