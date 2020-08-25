import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstOptionsPage } from './first-options.page';

const routes: Routes = [
  {
    path: '',
    component: FirstOptionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirstOptionsPageRoutingModule {}
