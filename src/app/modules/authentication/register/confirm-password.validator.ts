import { AbstractControl } from '@angular/forms';

export class ConfirmPasswordValidator {
  /**
   * Check matching password with confirm password
   * @param control AbstractControl
   */
  static MatchPassword(control: AbstractControl) {
    const password = control.get('password')?.value;

    const confirmPassword = control.get('passwordConfirm')?.value;

    if (password !== confirmPassword) {
      control.get('passwordConfirm')?.setErrors({ ConfirmPassword: true });
    } else {
      control.get('passwordConfirm')?.setErrors(null);
    }
  }
}
