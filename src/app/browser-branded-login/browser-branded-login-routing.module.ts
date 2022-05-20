import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrowserBrandedLoginPage } from './browser-branded-login.page';

const routes: Routes = [
  {
    path: '',
    component: BrowserBrandedLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrowserBrandedLoginPageRoutingModule {}
