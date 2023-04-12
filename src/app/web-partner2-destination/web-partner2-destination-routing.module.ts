import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebPartner2DestinationPage } from './web-partner2-destination.page';

const routes: Routes = [
  {
    path: '',
    component: WebPartner2DestinationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebPartner2DestinationPageRoutingModule {}
