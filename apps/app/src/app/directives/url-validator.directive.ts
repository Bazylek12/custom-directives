import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector:
    '[input[type=url][formControlName],input[type=url][formControl],input[type=url][ngModel]]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: UrlValidatorDirective,
      multi: true,
    },
  ],
})
export class UrlValidatorDirective implements Validator {
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const value = control.value as string;
    if (!value) {
      return null;
    }

    if (!value.startsWith('http://') && !value.startsWith('https://')) {
      return { mustStartWithHttpOrHttps: true };
    }

    if (!/\.[a-z]{2,}$/.test(value)) {
      return { mustEndWithDotDomain: true };
    }
    return null ;
  }
}
