import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsSecurityPage } from './settings-security.page';

const routes: Routes = [
  {
    path: '',
    component: SettingsSecurityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsSecurityPageRoutingModule {}
