import {
  Directive,
  HostListener,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component';

@Directive({ selector: '[confirmDialog]' })
export class ConfirmDialogDirective {
  constructor(private _matDialog: MatDialog) {}

  @Input() confirmDialog = '';
  @Output() confirmed: EventEmitter<boolean> = new EventEmitter<boolean>();

  @HostListener('click')
  onClick() {
    const dialog = this._matDialog.open(ConfirmDialogComponent, {
      data: { message: this.confirmDialog },
    });

   dialog.afterClosed().subscribe(result => {
    this.confirmed.emit(result)
   })
  }
}
