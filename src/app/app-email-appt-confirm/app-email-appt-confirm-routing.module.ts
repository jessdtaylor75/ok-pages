import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppEmailApptConfirmPage } from './app-email-appt-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: AppEmailApptConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppEmailApptConfirmPageRoutingModule {}
