import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Jumio1Page } from './jumio1.page';

const routes: Routes = [
  {
    path: '',
    component: Jumio1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Jumio1PageRoutingModule {}
