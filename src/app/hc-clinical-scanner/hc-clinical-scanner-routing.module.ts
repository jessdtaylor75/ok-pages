import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HcClinicalScannerPage } from './hc-clinical-scanner.page';

const routes: Routes = [
  {
    path: '',
    component: HcClinicalScannerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HcClinicalScannerPageRoutingModule {}
