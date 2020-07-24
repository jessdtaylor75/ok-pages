import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifyIdRecoveryPageRoutingModule } from './verify-id-recovery-routing.module';

import { VerifyIdRecoveryPage } from './verify-id-recovery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerifyIdRecoveryPageRoutingModule
  ],
  declarations: [VerifyIdRecoveryPage]
})
export class VerifyIdRecoveryPageModule {}
