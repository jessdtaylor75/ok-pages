import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EasSafetypassBadgePage } from './eas-safetypass-badge.page';

const routes: Routes = [
  {
    path: '',
    component: EasSafetypassBadgePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EasSafetypassBadgePageRoutingModule {}
