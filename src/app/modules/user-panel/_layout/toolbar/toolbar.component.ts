import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/modules/authentication/core/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  @Input()
  mobileQueryMatches: boolean = false;

  @Output()
  sideBarToggleEmitter: EventEmitter<void> = new EventEmitter();

  constructor(private _authService: AuthService) {}

  ngOnInit(): void {}
  toggleSideBar(): void {
    this.sideBarToggleEmitter.next();
  }

  logout(): void {
    this._authService.logout();
  }
}
