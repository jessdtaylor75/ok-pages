import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrowserApLoginPage } from './browser-ap-login.page';

const routes: Routes = [
  {
    path: '',
    component: BrowserApLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrowserApLoginPageRoutingModule {}
