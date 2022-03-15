import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardX1Page } from './card-x1.page';

const routes: Routes = [
  {
    path: '',
    component: CardX1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardX1PageRoutingModule {}
