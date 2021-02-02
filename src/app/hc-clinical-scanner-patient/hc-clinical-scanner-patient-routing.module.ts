import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HcClinicalScannerPatientPage } from './hc-clinical-scanner-patient.page';

const routes: Routes = [
  {
    path: '',
    component: HcClinicalScannerPatientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HcClinicalScannerPatientPageRoutingModule {}
