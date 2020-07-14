import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BiometricsSecurityViewPageRoutingModule } from './biometrics-security-view-routing.module';

import { BiometricsSecurityViewPage } from './biometrics-security-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BiometricsSecurityViewPageRoutingModule
  ],
  declarations: [BiometricsSecurityViewPage]
})
export class BiometricsSecurityViewPageModule {}
