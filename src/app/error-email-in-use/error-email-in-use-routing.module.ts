import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrorEmailInUsePage } from './error-email-in-use.page';

const routes: Routes = [
  {
    path: '',
    component: ErrorEmailInUsePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorEmailInUsePageRoutingModule {}
