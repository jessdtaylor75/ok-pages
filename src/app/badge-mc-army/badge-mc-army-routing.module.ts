import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BadgeMcArmyPage } from './badge-mc-army.page';

const routes: Routes = [
  {
    path: '',
    component: BadgeMcArmyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BadgeMcArmyPageRoutingModule {}
