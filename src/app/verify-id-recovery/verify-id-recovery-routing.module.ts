import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerifyIdRecoveryPage } from './verify-id-recovery.page';

const routes: Routes = [
  {
    path: '',
    component: VerifyIdRecoveryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerifyIdRecoveryPageRoutingModule {}
