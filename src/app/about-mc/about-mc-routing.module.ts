import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutMcPage } from './about-mc.page';

const routes: Routes = [
  {
    path: '',
    component: AboutMcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutMcPageRoutingModule {}
