import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BiometricsSecurityPageRoutingModule } from './biometrics-security-routing.module';

import { BiometricsSecurityPage } from './biometrics-security.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BiometricsSecurityPageRoutingModule
  ],
  declarations: [BiometricsSecurityPage]
})
export class BiometricsSecurityPageModule {}
