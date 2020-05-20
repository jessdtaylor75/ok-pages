import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditIdPage } from './edit-id.page';

const routes: Routes = [
  {
    path: '',
    component: EditIdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditIdPageRoutingModule {}
