import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BadgeMcUsafPage } from './badge-mc-usaf.page';

const routes: Routes = [
  {
    path: '',
    component: BadgeMcUsafPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BadgeMcUsafPageRoutingModule {}
