import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Hii5ReviewVideoPage } from './hii5-review-video.page';

const routes: Routes = [
  {
    path: '',
    component: Hii5ReviewVideoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Hii5ReviewVideoPageRoutingModule {}
