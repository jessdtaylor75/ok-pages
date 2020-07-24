import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScanEmailRecoveryPageRoutingModule } from './scan-email-recovery-routing.module';

import { ScanEmailRecoveryPage } from './scan-email-recovery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanEmailRecoveryPageRoutingModule
  ],
  declarations: [ScanEmailRecoveryPage]
})
export class ScanEmailRecoveryPageModule {}
