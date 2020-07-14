import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnterEmailPage } from './enter-email.page';

const routes: Routes = [
  {
    path: '',
    component: EnterEmailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnterEmailPageRoutingModule {}
