import { Directive, HostListener, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Directive({ selector: '[ShowSnackbarOnClick]' })
export class ShowSnackbarOnClickDirective {
  constructor(private _snackbar: MatSnackBar) {}
  @Input() ShowSnackbarOnClick = '';
  @HostListener('click')
  onClick() {
    this._snackbar.open(this.ShowSnackbarOnClick);
  }
}
