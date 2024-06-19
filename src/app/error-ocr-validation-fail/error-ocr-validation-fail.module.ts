import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ErrorOcrValidationFailPageRoutingModule } from './error-ocr-validation-fail-routing.module';

import { ErrorOcrValidationFailPage } from './error-ocr-validation-fail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ErrorOcrValidationFailPageRoutingModule
  ],
  declarations: [ErrorOcrValidationFailPage]
})
export class ErrorOcrValidationFailPageModule {}
