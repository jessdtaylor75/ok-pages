import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PassesModalPage } from './passes-modal.page';

const routes: Routes = [
  {
    path: '',
    component: PassesModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PassesModalPageRoutingModule {}
