import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalInfoAddPage } from './personal-info-add.page';

const routes: Routes = [
  {
    path: '',
    component: PersonalInfoAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalInfoAddPageRoutingModule {}
