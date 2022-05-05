import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuccessAccountCreatedPage } from './success-account-created.page';

const routes: Routes = [
  {
    path: '',
    component: SuccessAccountCreatedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuccessAccountCreatedPageRoutingModule {}
