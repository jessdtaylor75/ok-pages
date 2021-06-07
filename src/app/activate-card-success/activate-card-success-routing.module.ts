import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivateCardSuccessPage } from './activate-card-success.page';

const routes: Routes = [
  {
    path: '',
    component: ActivateCardSuccessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivateCardSuccessPageRoutingModule {}
