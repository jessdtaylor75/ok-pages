import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HcVaccineScreenerPage } from './hc-vaccine-screener.page';

const routes: Routes = [
  {
    path: '',
    component: HcVaccineScreenerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HcVaccineScreenerPageRoutingModule {}
