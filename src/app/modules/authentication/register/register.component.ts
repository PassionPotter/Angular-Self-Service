import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/services/loader.service';
import { ConfirmPasswordValidator } from './confirm-password.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  isLoading = false;
  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _loaderService: LoaderService
  ) {
    this.registerForm = this._fb.group(
      {
        accountNumber: [null, Validators.required],
        username: [null, Validators.required],
        firstName: [null, Validators.required],
        lastName: [null, Validators.required],
        email: [
          null,
          Validators.compose([Validators.required, Validators.email]),
        ],
        mobileNumber: [null],
        password: [null, Validators.required],
        passwordConfirm: [null, Validators.required],
        acceptConditions: [false],
      },
      {
        validator: ConfirmPasswordValidator.MatchPassword,
      }
    );
  }

  ngOnInit(): void {}
  formSubmit(): void {
    this.isLoading = true;
    this._loaderService.setLoader(true);
    setTimeout(() => {
      this._router.navigateByUrl('/auth/verify');
    }, 3000);
  }
}
