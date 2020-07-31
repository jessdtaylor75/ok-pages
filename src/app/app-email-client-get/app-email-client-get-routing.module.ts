import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppEmailClientGetPage } from './app-email-client-get.page';

const routes: Routes = [
  {
    path: '',
    component: AppEmailClientGetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppEmailClientGetPageRoutingModule {}
