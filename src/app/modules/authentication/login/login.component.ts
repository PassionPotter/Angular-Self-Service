import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoaderService } from 'src/app/services/loader.service';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoading = false;
  constructor(
    private _fb: FormBuilder,
    private _loaderService: LoaderService,
    private _authService: AuthService,
    private _router: Router
  ) {
    this.loginForm = this._fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  login(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    this.isLoading = true;
    this._loaderService.setLoader(true);

    setTimeout(() => {
      this._authService
        .login(this.loginForm.value.username, this.loginForm.value.password)
        .pipe(
          finalize(() => {
            this.isLoading = false;
            this._loaderService.setLoader(false);
            this._router.navigateByUrl('/');
          })
        )
        .subscribe(() => {});
    }, 2000);
  }
}
