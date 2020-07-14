import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewRecoveryPassPage } from './view-recovery-pass.page';

const routes: Routes = [
  {
    path: '',
    component: ViewRecoveryPassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewRecoveryPassPageRoutingModule {}
