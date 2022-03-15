import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IdDocumentsPage } from './id-documents.page';

const routes: Routes = [
  {
    path: '',
    component: IdDocumentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IdDocumentsPageRoutingModule {}
