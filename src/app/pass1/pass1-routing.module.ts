import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pass1Page } from './pass1.page';

const routes: Routes = [
  {
    path: '',
    component: Pass1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pass1PageRoutingModule {}
