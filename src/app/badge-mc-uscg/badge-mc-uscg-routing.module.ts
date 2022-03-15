import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BadgeMcUscgPage } from './badge-mc-uscg.page';

const routes: Routes = [
  {
    path: '',
    component: BadgeMcUscgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BadgeMcUscgPageRoutingModule {}
