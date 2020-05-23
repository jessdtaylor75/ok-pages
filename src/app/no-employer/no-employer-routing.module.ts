import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoEmployerPage } from './no-employer.page';

const routes: Routes = [
  {
    path: '',
    component: NoEmployerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoEmployerPageRoutingModule {}
