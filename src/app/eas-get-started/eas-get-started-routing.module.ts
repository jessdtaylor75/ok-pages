import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EasGetStartedPage } from './eas-get-started.page';

const routes: Routes = [
  {
    path: '',
    component: EasGetStartedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EasGetStartedPageRoutingModule {}
