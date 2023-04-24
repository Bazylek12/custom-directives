import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { ConfirmDialogDirectiveModule } from './directives/confirm-dialog.directive-module';
import { ConfirmDialogComponentModule } from './components/confirm-dialog/confirm-dialog.component-module';
import { ShowSnackbarOnClickDirectiveModule } from './directives/show-snackbar-on-click.directive-module';
import { BlockPasteDirectiveModule } from './directives/block-paste.directive-module';
import { BackgroundCarouselDirectiveModule } from './directives/background-carousel.directive-module';
import { MovableDirectiveModule } from './directives/movable.directive-module';
import { DeleteProductDirectiveModule } from './directives/delete-product.directive-module';
import { FeatureFlagDirectiveModule } from './directives/feature-flag.directive-module';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { UrlValidatorDirectiveModule } from './directives/url-validator.directive-module';
import { TelValidatorDirectiveModule } from './directives/tel-validator.directive-module';

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
    BlockPasteDirectiveModule,
    BackgroundCarouselDirectiveModule,
    MovableDirectiveModule,
    DeleteProductDirectiveModule,
    FeatureFlagDirectiveModule,
    UrlValidatorDirectiveModule,
    TelValidatorDirectiveModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
