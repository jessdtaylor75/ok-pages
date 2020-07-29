import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pass3Page } from './pass3.page';

const routes: Routes = [
  {
    path: '',
    component: Pass3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pass3PageRoutingModule {}
