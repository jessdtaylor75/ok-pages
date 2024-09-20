import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Hii5LanderPage } from './hii5-lander.page';

const routes: Routes = [
  {
    path: '',
    component: Hii5LanderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Hii5LanderPageRoutingModule {}
