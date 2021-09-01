import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm: FormGroup;
  isLoading = false;
  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _loaderService: LoaderService
  ) {
    this.forgotPasswordForm = this._fb.group({
      email: [
        null,
        Validators.compose([Validators.required, Validators.email]),
      ],
    });
  }

  ngOnInit(): void {}

  submit(): void {
    this.isLoading = true;
    this._loaderService.setLoader(true);
    setTimeout(() => {
      this._router.navigateByUrl('/auth/login');
    }, 3000);
  }
}
