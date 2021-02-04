import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EasProfileHomePage } from './eas-profile-home.page';

const routes: Routes = [
  {
    path: '',
    component: EasProfileHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EasProfileHomePageRoutingModule {}
