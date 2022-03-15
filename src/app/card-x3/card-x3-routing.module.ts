import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardX3Page } from './card-x3.page';

const routes: Routes = [
  {
    path: '',
    component: CardX3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardX3PageRoutingModule {}
