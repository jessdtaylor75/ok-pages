import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HcStatusC19positivePage } from './hc-status-c19positive.page';

const routes: Routes = [
  {
    path: '',
    component: HcStatusC19positivePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HcStatusC19positivePageRoutingModule {}
