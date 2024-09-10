import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChannelListPage } from './channel-list.page';

const routes: Routes = [
  {
    path: '',
    component: ChannelListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChannelListPageRoutingModule {}
