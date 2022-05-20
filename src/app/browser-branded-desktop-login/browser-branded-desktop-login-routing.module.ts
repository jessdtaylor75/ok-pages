import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrowserBrandedDesktopLoginPage } from './browser-branded-desktop-login.page';

const routes: Routes = [
  {
    path: '',
    component: BrowserBrandedDesktopLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrowserBrandedDesktopLoginPageRoutingModule {}
