import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private _loaderSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  constructor() {}

  get loader$(): Observable<boolean> {
    return this._loaderSubject.asObservable();
  }

  setLoader(_load: boolean): void {
    this._loaderSubject.next(_load);
  }
}
