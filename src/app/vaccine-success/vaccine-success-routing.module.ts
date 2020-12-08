import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VaccineSuccessPage } from './vaccine-success.page';

const routes: Routes = [
  {
    path: '',
    component: VaccineSuccessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VaccineSuccessPageRoutingModule {}
