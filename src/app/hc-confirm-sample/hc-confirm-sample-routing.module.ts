import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HcConfirmSamplePage } from './hc-confirm-sample.page';

const routes: Routes = [
  {
    path: '',
    component: HcConfirmSamplePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HcConfirmSamplePageRoutingModule {}
