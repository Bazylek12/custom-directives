import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogDirectiveModule } from './directives/confirm-dialog.directive-module';
import { ConfirmDialogComponentModule } from './components/confirm-dialog/confirm-dialog.component-module';
import { ShowSnackbarOnClickDirectiveModule } from './directives/show-snackbar-on-click.directive-module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    HttpClientModule,
    MaterialModule,
    RouterModule,
    AppRoutingModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    ConfirmDialogDirectiveModule,
    ConfirmDialogComponentModule,
    ShowSnackbarOnClickDirectiveModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
