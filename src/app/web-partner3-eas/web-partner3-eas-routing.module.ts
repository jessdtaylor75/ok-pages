import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebPartner3EasPage } from './web-partner3-eas.page';

const routes: Routes = [
  {
    path: '',
    component: WebPartner3EasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebPartner3EasPageRoutingModule {}
