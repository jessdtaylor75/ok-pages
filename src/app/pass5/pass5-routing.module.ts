import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pass5Page } from './pass5.page';

const routes: Routes = [
  {
    path: '',
    component: Pass5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pass5PageRoutingModule {}
