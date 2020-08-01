import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppBrowserFirstCheckinPage } from './app-browser-first-checkin.page';

const routes: Routes = [
  {
    path: '',
    component: AppBrowserFirstCheckinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppBrowserFirstCheckinPageRoutingModule {}
