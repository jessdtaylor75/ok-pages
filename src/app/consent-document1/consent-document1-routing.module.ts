import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsentDocument1Page } from './consent-document1.page';

const routes: Routes = [
  {
    path: '',
    component: ConsentDocument1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsentDocument1PageRoutingModule {}
