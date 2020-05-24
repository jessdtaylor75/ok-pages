import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LegalAgreementsPage } from './legal-agreements.page';

const routes: Routes = [
  {
    path: '',
    component: LegalAgreementsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LegalAgreementsPageRoutingModule {}
