import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HcEnterResultPage } from './hc-enter-result.page';

const routes: Routes = [
  {
    path: '',
    component: HcEnterResultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HcEnterResultPageRoutingModule {}
