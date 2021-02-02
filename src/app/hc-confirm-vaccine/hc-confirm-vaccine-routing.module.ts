import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HcConfirmVaccinePage } from './hc-confirm-vaccine.page';

const routes: Routes = [
  {
    path: '',
    component: HcConfirmVaccinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HcConfirmVaccinePageRoutingModule {}
