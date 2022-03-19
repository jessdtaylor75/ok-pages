import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrowserMcDesktopLoginPage } from './browser-mc-desktop-login.page';

const routes: Routes = [
  {
    path: '',
    component: BrowserMcDesktopLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrowserMcDesktopLoginPageRoutingModule {}
