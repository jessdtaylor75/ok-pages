import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalInfoMcPage } from './personal-info-mc.page';

const routes: Routes = [
  {
    path: '',
    component: PersonalInfoMcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalInfoMcPageRoutingModule {}
