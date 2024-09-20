import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AokSmsExamplePage } from './aok-sms-example.page';

const routes: Routes = [
  {
    path: '',
    component: AokSmsExamplePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AokSmsExamplePageRoutingModule {}
