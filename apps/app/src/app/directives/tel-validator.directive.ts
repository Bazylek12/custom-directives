import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector:
    '[input[type=tel][formControlName],input[type=tel][formControl],input[type=tel][ngModel]]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: TelValidatorDirective,
    multi: true
  }],
})
export class TelValidatorDirective implements Validator {
  @Input() pattern: string | undefined = undefined;

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const value = control.value as string;
    if (!value) {
        return null
    }

    if (this.pattern && value) {
        const pattern = new RegExp(this.pattern)
        const isMatched = value.match(pattern) ? true : false
        return isMatched ? null : { invalidPattern: true }
    }
    return null
  }
}
