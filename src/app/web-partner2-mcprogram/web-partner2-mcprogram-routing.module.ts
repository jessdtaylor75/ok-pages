import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebPartner2McprogramPage } from './web-partner2-mcprogram.page';

const routes: Routes = [
  {
    path: '',
    component: WebPartner2McprogramPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebPartner2McprogramPageRoutingModule {}
