import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonaX1Page } from './persona-x1.page';

const routes: Routes = [
  {
    path: '',
    component: PersonaX1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonaX1PageRoutingModule {}
