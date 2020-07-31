import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppBrowserPage } from './app-browser.page';

const routes: Routes = [
  {
    path: '',
    component: AppBrowserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppBrowserPageRoutingModule {}
