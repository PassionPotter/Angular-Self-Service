import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { map, finalize } from 'rxjs/operators';
import { UserModel } from '../_models/user.model';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { AuthHTTPService } from './auth-http.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // private fields
  private authLocalStorageToken = `${environment.appVersion}-${environment.USERDATA_KEY}`;

  private currentUserValue: UserModel | undefined;

  constructor(private _router: Router, private _authHttp: AuthHTTPService) {
    this.currentUserValue = this.getUserDetailsFromAuthToken();
  }

  // public methods
  login(email: string, password: string): Observable<UserModel> {
    // return this._authHttp.login(email, password).pipe(
    // map((_authToken: string): any => {
    // for testing purpose
    const authToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJhZG1pbiIsImxhc3ROYW1lIjoiYWRtaW4iLCJwaG9uZSI6IjEyMy00NTYtNzg5MCIsImNvbXBhbnkiOiJhZG1pbi1jb21wYW55IiwiaXNBY3RpdmUiOnRydWUsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYyOTEyODAzNSwiZXhwIjoxNjI5MjE0NDM1fQ.rAUe7EZduBcSSuAPW0QUVYU2ZOgqYd8Tx2ECrvAFPt4';
    const result = this.setAuthFromLocalStorage(authToken);
    if (result) {
      this.currentUserValue = this.getUserDetailsFromAuthToken();
      // return this.currentUserValue;
    }
    // return null;
    // })
    // );

    return of();
  }

  logout() {
    localStorage.removeItem(this.authLocalStorageToken);
    this.currentUserValue = undefined;
    this._router.navigateByUrl('/auth/login');
  }

  getUserDetailsFromAuthToken(): UserModel | undefined {
    const token = this.getToken();
    let payload;

    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);

      return JSON.parse(payload);
    }
    return undefined;
  }

  getCurrentUser(): UserModel | undefined {
    return this.currentUserValue;
  }
  getToken(): string | null {
    return localStorage.getItem(this.authLocalStorageToken);
  }

  // private methods
  private setAuthFromLocalStorage(authToken: string): boolean {
    // store authToken accessToken/refreshToken/epiresIn in local storage to keep user logged in between page refreshes
    if (authToken?.length) {
      this.saveToken(authToken);
      return true;
    }
    return false;
  }

  private saveToken(token: string): void {
    localStorage.setItem(this.authLocalStorageToken, token);
  }
}
