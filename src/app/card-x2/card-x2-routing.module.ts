import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardX2Page } from './card-x2.page';

const routes: Routes = [
  {
    path: '',
    component: CardX2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardX2PageRoutingModule {}
