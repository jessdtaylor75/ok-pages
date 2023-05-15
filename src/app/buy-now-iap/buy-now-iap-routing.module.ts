import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuyNowIapPage } from './buy-now-iap.page';

const routes: Routes = [
  {
    path: '',
    component: BuyNowIapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuyNowIapPageRoutingModule {}
