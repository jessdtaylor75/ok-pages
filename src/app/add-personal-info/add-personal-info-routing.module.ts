import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPersonalInfoPage } from './add-personal-info.page';

const routes: Routes = [
  {
    path: '',
    component: AddPersonalInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPersonalInfoPageRoutingModule {}
