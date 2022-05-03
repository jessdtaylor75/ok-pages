import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalInfoMcUnverifiedPage } from './personal-info-mc-unverified.page';

const routes: Routes = [
  {
    path: '',
    component: PersonalInfoMcUnverifiedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalInfoMcUnverifiedPageRoutingModule {}
