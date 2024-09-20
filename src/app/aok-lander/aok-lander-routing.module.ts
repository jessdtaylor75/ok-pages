import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AokLanderPage } from './aok-lander.page';

const routes: Routes = [
  {
    path: '',
    component: AokLanderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AokLanderPageRoutingModule {}
