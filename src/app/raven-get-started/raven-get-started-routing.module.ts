import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RavenGetStartedPage } from './raven-get-started.page';

const routes: Routes = [
  {
    path: '',
    component: RavenGetStartedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RavenGetStartedPageRoutingModule {}
