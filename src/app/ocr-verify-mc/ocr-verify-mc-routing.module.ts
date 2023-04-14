import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OcrVerifyMcPage } from './ocr-verify-mc.page';

const routes: Routes = [
  {
    path: '',
    component: OcrVerifyMcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OcrVerifyMcPageRoutingModule {}
