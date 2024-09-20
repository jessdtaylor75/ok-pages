import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Hii5RecordVideoPage } from './hii5-record-video.page';

const routes: Routes = [
  {
    path: '',
    component: Hii5RecordVideoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Hii5RecordVideoPageRoutingModule {}
