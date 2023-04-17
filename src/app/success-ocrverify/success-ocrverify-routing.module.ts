import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuccessOcrverifyPage } from './success-ocrverify.page';

const routes: Routes = [
  {
    path: '',
    component: SuccessOcrverifyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuccessOcrverifyPageRoutingModule {}
