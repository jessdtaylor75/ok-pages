import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HcPatientCheckInPage } from './hc-patient-check-in.page';

const routes: Routes = [
  {
    path: '',
    component: HcPatientCheckInPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HcPatientCheckInPageRoutingModule {}
