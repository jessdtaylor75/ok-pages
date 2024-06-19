import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrorOcrValidationFailPage } from './error-ocr-validation-fail.page';

const routes: Routes = [
  {
    path: '',
    component: ErrorOcrValidationFailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorOcrValidationFailPageRoutingModule {}
