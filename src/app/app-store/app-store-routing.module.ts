import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppStorePage } from './app-store.page';

const routes: Routes = [
  {
    path: '',
    component: AppStorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppStorePageRoutingModule {}
