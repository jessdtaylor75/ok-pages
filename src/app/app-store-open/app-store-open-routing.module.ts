import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppStoreOpenPage } from './app-store-open.page';

const routes: Routes = [
  {
    path: '',
    component: AppStoreOpenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppStoreOpenPageRoutingModule {}
