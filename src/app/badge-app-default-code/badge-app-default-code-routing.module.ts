import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BadgeAppDefaultCodePage } from './badge-app-default-code.page';

const routes: Routes = [
  {
    path: '',
    component: BadgeAppDefaultCodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BadgeAppDefaultCodePageRoutingModule {}
