import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HcStatusRecoveredPage } from './hc-status-recovered.page';

const routes: Routes = [
  {
    path: '',
    component: HcStatusRecoveredPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HcStatusRecoveredPageRoutingModule {}
