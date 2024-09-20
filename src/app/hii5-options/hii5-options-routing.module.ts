import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Hii5OptionsPage } from './hii5-options.page';

const routes: Routes = [
  {
    path: '',
    component: Hii5OptionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Hii5OptionsPageRoutingModule {}
