import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TmAuthPurchasePage } from './tm-auth-purchase.page';

const routes: Routes = [
  {
    path: '',
    component: TmAuthPurchasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TmAuthPurchasePageRoutingModule {}
