import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserAppStorePage } from './user-app-store.page';

const routes: Routes = [
  {
    path: '',
    component: UserAppStorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserAppStorePageRoutingModule {}
