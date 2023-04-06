import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrowserBrandedOfferPage } from './browser-branded-offer.page';

const routes: Routes = [
  {
    path: '',
    component: BrowserBrandedOfferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrowserBrandedOfferPageRoutingModule {}
