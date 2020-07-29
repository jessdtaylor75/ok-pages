import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pass4Page } from './pass4.page';

const routes: Routes = [
  {
    path: '',
    component: Pass4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pass4PageRoutingModule {}
