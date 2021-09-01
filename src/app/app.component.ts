import { Component } from '@angular/core';
import { Event, NavigationEnd, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private _router: Router, private _loaderService: LoaderService) {}
  title = 'web-self-service-app';
  isLoading = false;
  ngOnInit(): void {
    // will set loader to false on every route change
    this._router.events
      .pipe(filter((e: Event): e is RouterEvent => e instanceof NavigationEnd))
      .subscribe(() => {
        this._loaderService.setLoader(false);
      });

    this._loaderService.loader$.subscribe((_isLoading: boolean) => {
      this.isLoading = _isLoading;
    });
  }
}
