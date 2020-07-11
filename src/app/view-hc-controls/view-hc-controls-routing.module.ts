import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewHcControlsPage } from './view-hc-controls.page';

const routes: Routes = [
  {
    path: '',
    component: ViewHcControlsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewHcControlsPageRoutingModule {}
