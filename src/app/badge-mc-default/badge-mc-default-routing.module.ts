import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BadgeMcDefaultPage } from './badge-mc-default.page';

const routes: Routes = [
  {
    path: '',
    component: BadgeMcDefaultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BadgeMcDefaultPageRoutingModule {}
