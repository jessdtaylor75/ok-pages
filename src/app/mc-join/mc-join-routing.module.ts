import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { McJoinPage } from './mc-join.page';

const routes: Routes = [
  {
    path: '',
    component: McJoinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class McJoinPageRoutingModule {}
