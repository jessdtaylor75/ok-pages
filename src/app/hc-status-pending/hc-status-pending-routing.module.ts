import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HcStatusPendingPage } from './hc-status-pending.page';

const routes: Routes = [
  {
    path: '',
    component: HcStatusPendingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HcStatusPendingPageRoutingModule {}
