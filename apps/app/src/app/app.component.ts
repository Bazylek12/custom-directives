import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'lowgular-acms-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly urlForm: FormGroup = new FormGroup({
    url: new FormControl()
  });

  onConfirmed(event: boolean): void {
    console.log(event);
  }

}
