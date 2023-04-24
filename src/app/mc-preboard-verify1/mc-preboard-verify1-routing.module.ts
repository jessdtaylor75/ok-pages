import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { McPreboardVerify1Page } from './mc-preboard-verify1.page';

const routes: Routes = [
  {
    path: '',
    component: McPreboardVerify1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class McPreboardVerify1PageRoutingModule {}
