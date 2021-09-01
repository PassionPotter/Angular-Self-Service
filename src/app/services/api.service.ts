import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private path = environment.apiUrl;

  constructor(private router: Router, private http: HttpClient) {}

  request(
    method: 'post' | 'get' | 'delete' | 'put',
    type: string,
    _objectToSend?: any
  ): Observable<any> {
    let base = this.http.post(this.path + '' + type, _objectToSend);
    if (method === 'post') {
      base = this.http.post(this.path + '' + type, _objectToSend);
    } else if (method === 'get') {
      base = this.http.get(this.path + '' + type);
    } else if (method === 'delete') {
      base = this.http.delete(this.path + '' + type);
    } else if (method === 'put') {
      base = this.http.put(this.path + '' + type, _objectToSend);
    }

    const request = base.pipe(
      map((data: any) => {
        // if (!environment.production) {
        console.log(
          '%capi.service %csuccess',
          'color: black; background: yellow; padding: 2px; border-radius: 2px;',
          'color: white; background: blue; padding: 2px; border-radius: 2px;',
          data
        );

        return data;
      }),
      catchError((err) => {
        if (
          err &&
          err.error &&
          (err.error.message == 'tokenExpired' ||
            err.error.message == 'subscriptionExpired')
        ) {
          // this.auth.logout();
          if (err.error.message == 'tokenExpired') {
            // this._myMessageService.raiseMessage(
            //   'warn',
            //   'Token Expired. Please login again'
            // );
          } else if (err.error.message == 'subscriptionExpired') {
            this.router.navigateByUrl('message/subscriptionExpired'); // we will show a message for qoute from the admin
          }
        }
        if (!environment.production) {
          console.log(
            '%capi.service %cError',
            'color: black; background: yellow; padding: 2px; border-radius: 2px;',
            'color: white; background: red; padding: 2px; border-radius: 2px;',
            err
          );
        }
        return throwError(err);
      })
    );

    return request;
  }
}
