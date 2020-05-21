import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewHealthInfoPage } from './view-health-info.page';

const routes: Routes = [
  {
    path: '',
    component: ViewHealthInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewHealthInfoPageRoutingModule {}
