import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppEmailClientFindPage } from './app-email-client-find.page';

const routes: Routes = [
  {
    path: '',
    component: AppEmailClientFindPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppEmailClientFindPageRoutingModule {}
