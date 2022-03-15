import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BadgeMcNavyPage } from './badge-mc-navy.page';

const routes: Routes = [
  {
    path: '',
    component: BadgeMcNavyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BadgeMcNavyPageRoutingModule {}
