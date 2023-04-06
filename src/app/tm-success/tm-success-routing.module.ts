import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TmSuccessPage } from './tm-success.page';

const routes: Routes = [
  {
    path: '',
    component: TmSuccessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TmSuccessPageRoutingModule {}
