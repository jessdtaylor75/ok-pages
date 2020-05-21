import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditInsurancePage } from './edit-insurance.page';

const routes: Routes = [
  {
    path: '',
    component: EditInsurancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditInsurancePageRoutingModule {}
