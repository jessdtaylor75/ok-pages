import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HcAccessScannerPage } from './hc-access-scanner.page';

const routes: Routes = [
  {
    path: '',
    component: HcAccessScannerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HcAccessScannerPageRoutingModule {}
