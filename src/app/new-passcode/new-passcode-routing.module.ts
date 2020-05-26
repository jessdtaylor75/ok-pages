import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewPasscodePage } from './new-passcode.page';

const routes: Routes = [
  {
    path: '',
    component: NewPasscodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewPasscodePageRoutingModule {}
