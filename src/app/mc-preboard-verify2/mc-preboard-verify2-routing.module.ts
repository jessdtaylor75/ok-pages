import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { McPreboardVerify2Page } from './mc-preboard-verify2.page';

const routes: Routes = [
  {
    path: '',
    component: McPreboardVerify2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class McPreboardVerify2PageRoutingModule {}
