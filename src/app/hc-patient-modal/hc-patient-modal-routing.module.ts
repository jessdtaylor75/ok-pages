import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HcPatientModalPage } from './hc-patient-modal.page';

const routes: Routes = [
  {
    path: '',
    component: HcPatientModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HcPatientModalPageRoutingModule {}
