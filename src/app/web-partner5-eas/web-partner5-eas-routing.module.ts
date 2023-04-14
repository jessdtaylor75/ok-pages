import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebPartner5EasPage } from './web-partner5-eas.page';

const routes: Routes = [
  {
    path: '',
    component: WebPartner5EasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebPartner5EasPageRoutingModule {}
