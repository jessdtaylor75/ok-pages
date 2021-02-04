import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EasPersonalInfoPage } from './eas-personal-info.page';

const routes: Routes = [
  {
    path: '',
    component: EasPersonalInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EasPersonalInfoPageRoutingModule {}
