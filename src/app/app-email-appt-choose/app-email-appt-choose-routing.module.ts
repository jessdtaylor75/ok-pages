import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppEmailApptChoosePage } from './app-email-appt-choose.page';

const routes: Routes = [
  {
    path: '',
    component: AppEmailApptChoosePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppEmailApptChoosePageRoutingModule {}
