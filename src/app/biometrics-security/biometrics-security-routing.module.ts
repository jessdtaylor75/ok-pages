import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BiometricsSecurityPage } from './biometrics-security.page';

const routes: Routes = [
  {
    path: '',
    component: BiometricsSecurityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BiometricsSecurityPageRoutingModule {}
