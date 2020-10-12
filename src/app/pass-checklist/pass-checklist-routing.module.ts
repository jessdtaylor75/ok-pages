import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PassChecklistPage } from './pass-checklist.page';

const routes: Routes = [
  {
    path: '',
    component: PassChecklistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PassChecklistPageRoutingModule {}
