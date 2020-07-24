import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JumioRecoveryPageRoutingModule } from './jumio-recovery-routing.module';

import { JumioRecoveryPage } from './jumio-recovery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JumioRecoveryPageRoutingModule
  ],
  declarations: [JumioRecoveryPage]
})
export class JumioRecoveryPageModule {}
