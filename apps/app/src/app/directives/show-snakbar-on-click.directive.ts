import { Directive, HostListener, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Directive({ selector: '[ShowSnakbarOnClick]' })
export class ShowSnakbarOnClickDirective {
    constructor(private _snackBar: MatSnackBar) {}
    @Input() ShowSnakbarOnClick = '';

    @HostListener('click')
    onClick() {
        this._snackBar.open(this.ShowSnakbarOnClick)
    }
}
