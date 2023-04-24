import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { McPreboardGetAppPage } from './mc-preboard-get-app.page';

const routes: Routes = [
  {
    path: '',
    component: McPreboardGetAppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class McPreboardGetAppPageRoutingModule {}
