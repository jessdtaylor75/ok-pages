import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HcVaccineAdminPage } from './hc-vaccine-admin.page';

const routes: Routes = [
  {
    path: '',
    component: HcVaccineAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HcVaccineAdminPageRoutingModule {}
