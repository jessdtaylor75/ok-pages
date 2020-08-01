import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppBrowserMapPage } from './app-browser-map.page';

const routes: Routes = [
  {
    path: '',
    component: AppBrowserMapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppBrowserMapPageRoutingModule {}
