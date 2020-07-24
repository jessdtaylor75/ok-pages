import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScanEmailRecoveryPage } from './scan-email-recovery.page';

const routes: Routes = [
  {
    path: '',
    component: ScanEmailRecoveryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScanEmailRecoveryPageRoutingModule {}
