import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonaX3Page } from './persona-x3.page';

const routes: Routes = [
  {
    path: '',
    component: PersonaX3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonaX3PageRoutingModule {}
