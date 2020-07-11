import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HcStatusNotCertifiedPage } from './hc-status-not-certified.page';

const routes: Routes = [
  {
    path: '',
    component: HcStatusNotCertifiedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HcStatusNotCertifiedPageRoutingModule {}
