import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BadgeMcDefaultCodePage } from './badge-mc-default-code.page';

const routes: Routes = [
  {
    path: '',
    component: BadgeMcDefaultCodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BadgeMcDefaultCodePageRoutingModule {}
