import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestSuccessPage } from './test-success.page';

const routes: Routes = [
  {
    path: '',
    component: TestSuccessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestSuccessPageRoutingModule {}
