import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetStartedMcPage } from './get-started-mc.page';

const routes: Routes = [
  {
    path: '',
    component: GetStartedMcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetStartedMcPageRoutingModule {}
