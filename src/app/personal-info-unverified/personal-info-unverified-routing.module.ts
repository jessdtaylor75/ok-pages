import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalInfoUnverifiedPage } from './personal-info-unverified.page';

const routes: Routes = [
  {
    path: '',
    component: PersonalInfoUnverifiedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalInfoUnverifiedPageRoutingModule {}
