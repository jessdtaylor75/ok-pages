import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppBrowserRestmenuPage } from './app-browser-restmenu.page';

const routes: Routes = [
  {
    path: '',
    component: AppBrowserRestmenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppBrowserRestmenuPageRoutingModule {}
