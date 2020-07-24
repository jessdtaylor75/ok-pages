import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JumioRecoveryPage } from './jumio-recovery.page';

const routes: Routes = [
  {
    path: '',
    component: JumioRecoveryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JumioRecoveryPageRoutingModule {}
