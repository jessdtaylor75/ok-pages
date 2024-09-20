import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Hii5SmsExamplePage } from './hii5-sms-example.page';

const routes: Routes = [
  {
    path: '',
    component: Hii5SmsExamplePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Hii5SmsExamplePageRoutingModule {}
