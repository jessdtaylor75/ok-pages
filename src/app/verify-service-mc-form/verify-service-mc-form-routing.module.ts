import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerifyServiceMcFormPage } from './verify-service-mc-form.page';

const routes: Routes = [
  {
    path: '',
    component: VerifyServiceMcFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerifyServiceMcFormPageRoutingModule {}
