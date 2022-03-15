import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BadgeMcUsmcPage } from './badge-mc-usmc.page';

const routes: Routes = [
  {
    path: '',
    component: BadgeMcUsmcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BadgeMcUsmcPageRoutingModule {}
