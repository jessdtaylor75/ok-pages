import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BiometricsMcPage } from './biometrics-mc.page';

const routes: Routes = [
  {
    path: '',
    component: BiometricsMcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BiometricsMcPageRoutingModule {}
