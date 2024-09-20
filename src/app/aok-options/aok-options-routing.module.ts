import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AokOptionsPage } from './aok-options.page';

const routes: Routes = [
  {
    path: '',
    component: AokOptionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AokOptionsPageRoutingModule {}
