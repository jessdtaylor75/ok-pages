import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { McPreboardEasPage } from './mc-preboard-eas.page';

const routes: Routes = [
  {
    path: '',
    component: McPreboardEasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class McPreboardEasPageRoutingModule {}
