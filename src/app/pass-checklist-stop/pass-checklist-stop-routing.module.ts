import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PassChecklistStopPage } from './pass-checklist-stop.page';

const routes: Routes = [
  {
    path: '',
    component: PassChecklistStopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PassChecklistStopPageRoutingModule {}
