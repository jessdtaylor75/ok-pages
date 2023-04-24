import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { McPreboardOcrPage } from './mc-preboard-ocr.page';

const routes: Routes = [
  {
    path: '',
    component: McPreboardOcrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class McPreboardOcrPageRoutingModule {}
