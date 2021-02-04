import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EasMySpStatusPage } from './eas-my-sp-status.page';

const routes: Routes = [
  {
    path: '',
    component: EasMySpStatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EasMySpStatusPageRoutingModule {}
