import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeletePersonaPage } from './delete-persona.page';

const routes: Routes = [
  {
    path: '',
    component: DeletePersonaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeletePersonaPageRoutingModule {}
