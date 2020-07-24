import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnterEmailErrorPage } from './enter-email-error.page';

const routes: Routes = [
  {
    path: '',
    component: EnterEmailErrorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnterEmailErrorPageRoutingModule {}
