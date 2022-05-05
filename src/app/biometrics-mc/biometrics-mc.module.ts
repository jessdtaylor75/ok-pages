import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BiometricsMcPageRoutingModule } from './biometrics-mc-routing.module';

import { BiometricsMcPage } from './biometrics-mc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BiometricsMcPageRoutingModule
  ],
  declarations: [BiometricsMcPage]
})
export class BiometricsMcPageModule {}
