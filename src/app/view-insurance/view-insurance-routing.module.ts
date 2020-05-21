import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewInsurancePage } from './view-insurance.page';

const routes: Routes = [
  {
    path: '',
    component: ViewInsurancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewInsurancePageRoutingModule {}
