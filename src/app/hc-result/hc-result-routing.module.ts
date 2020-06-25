import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HcResultPage } from './hc-result.page';

const routes: Routes = [
  {
    path: '',
    component: HcResultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HcResultPageRoutingModule {}
