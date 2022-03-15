import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrowserMildealsPage } from './browser-mildeals.page';

const routes: Routes = [
  {
    path: '',
    component: BrowserMildealsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrowserMildealsPageRoutingModule {}
