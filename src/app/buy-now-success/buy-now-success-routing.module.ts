import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuyNowSuccessPage } from './buy-now-success.page';

const routes: Routes = [
  {
    path: '',
    component: BuyNowSuccessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuyNowSuccessPageRoutingModule {}
