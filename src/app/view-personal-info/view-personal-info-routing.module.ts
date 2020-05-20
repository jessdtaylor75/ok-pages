import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewPersonalInfoPage } from './view-personal-info.page';

const routes: Routes = [
  {
    path: '',
    component: ViewPersonalInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewPersonalInfoPageRoutingModule {}
