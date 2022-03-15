import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrowserEasPage } from './browser-eas.page';

const routes: Routes = [
  {
    path: '',
    component: BrowserEasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrowserEasPageRoutingModule {}
