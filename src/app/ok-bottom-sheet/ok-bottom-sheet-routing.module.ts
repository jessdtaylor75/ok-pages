import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OkBottomSheetPage } from './ok-bottom-sheet.page';

const routes: Routes = [
  {
    path: '',
    component: OkBottomSheetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OkBottomSheetPageRoutingModule {}
