import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileCodePage } from './profile-code.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileCodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileCodePageRoutingModule {}
