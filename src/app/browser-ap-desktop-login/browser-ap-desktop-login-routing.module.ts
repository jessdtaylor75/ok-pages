import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrowserApDesktopLoginPage } from './browser-ap-desktop-login.page';

const routes: Routes = [
  {
    path: '',
    component: BrowserApDesktopLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrowserApDesktopLoginPageRoutingModule {}
