import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrowserMcLoginPage } from './browser-mc-login.page';

const routes: Routes = [
  {
    path: '',
    component: BrowserMcLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrowserMcLoginPageRoutingModule {}
