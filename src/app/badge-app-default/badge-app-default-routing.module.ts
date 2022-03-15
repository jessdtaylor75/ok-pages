import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BadgeAppDefaultPage } from './badge-app-default.page';

const routes: Routes = [
  {
    path: '',
    component: BadgeAppDefaultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BadgeAppDefaultPageRoutingModule {}
