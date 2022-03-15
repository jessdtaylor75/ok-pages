import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonaX2Page } from './persona-x2.page';

const routes: Routes = [
  {
    path: '',
    component: PersonaX2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonaX2PageRoutingModule {}
