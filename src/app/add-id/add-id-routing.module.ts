import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddIdPage } from './add-id.page';

const routes: Routes = [
  {
    path: '',
    component: AddIdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddIdPageRoutingModule {}
