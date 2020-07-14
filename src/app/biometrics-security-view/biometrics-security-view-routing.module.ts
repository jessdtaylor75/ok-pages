import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BiometricsSecurityViewPage } from './biometrics-security-view.page';

const routes: Routes = [
  {
    path: '',
    component: BiometricsSecurityViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BiometricsSecurityViewPageRoutingModule {}
