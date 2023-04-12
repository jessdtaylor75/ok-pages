import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebPartner2MenuPage } from './web-partner2-menu.page';

const routes: Routes = [
  {
    path: '',
    component: WebPartner2MenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebPartner2MenuPageRoutingModule {}
