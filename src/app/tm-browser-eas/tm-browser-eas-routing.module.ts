import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TmBrowserEasPage } from './tm-browser-eas.page';

const routes: Routes = [
  {
    path: '',
    component: TmBrowserEasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TmBrowserEasPageRoutingModule {}
