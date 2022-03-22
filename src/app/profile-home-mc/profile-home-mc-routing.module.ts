import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileHomeMcPage } from './profile-home-mc.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileHomeMcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileHomeMcPageRoutingModule {}
