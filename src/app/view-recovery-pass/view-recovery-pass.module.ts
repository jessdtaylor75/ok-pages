import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewRecoveryPassPageRoutingModule } from './view-recovery-pass-routing.module';

import { ViewRecoveryPassPage } from './view-recovery-pass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewRecoveryPassPageRoutingModule
  ],
  declarations: [ViewRecoveryPassPage]
})
export class ViewRecoveryPassPageModule {}
