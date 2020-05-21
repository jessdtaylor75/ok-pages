import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoInsurancePage } from './no-insurance.page';

const routes: Routes = [
  {
    path: '',
    component: NoInsurancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoInsurancePageRoutingModule {}
