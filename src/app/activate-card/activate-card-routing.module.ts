import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivateCardPage } from './activate-card.page';

const routes: Routes = [
  {
    path: '',
    component: ActivateCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivateCardPageRoutingModule {}
