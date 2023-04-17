import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuccessOcrverifyMcPage } from './success-ocrverify-mc.page';

const routes: Routes = [
  {
    path: '',
    component: SuccessOcrverifyMcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuccessOcrverifyMcPageRoutingModule {}
