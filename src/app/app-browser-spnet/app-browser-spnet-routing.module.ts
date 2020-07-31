import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppBrowserSpnetPage } from './app-browser-spnet.page';

const routes: Routes = [
  {
    path: '',
    component: AppBrowserSpnetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppBrowserSpnetPageRoutingModule {}
