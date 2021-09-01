import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss'],
})
export class VerificationComponent implements OnInit {
  verificationForm: FormGroup;
  isLoading = false;
  constructor(
    private _fb: FormBuilder,
    private _loaderService: LoaderService,
    private _router: Router
  ) {
    this.verificationForm = this._fb.group({
      requestId: [null, Validators.required],
      authenticationToken: [null, Validators.required],
    });
  }

  ngOnInit(): void {}
  verify(): void {
    this.isLoading = true;
    this._loaderService.setLoader(true);

    setTimeout(() => {
      this._router.navigateByUrl('/auth/login');
    }, 3000);
  }
}
