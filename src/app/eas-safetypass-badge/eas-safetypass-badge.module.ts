import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EasSafetypassBadgePageRoutingModule } from './eas-safetypass-badge-routing.module';

import { EasSafetypassBadgePage } from './eas-safetypass-badge.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EasSafetypassBadgePageRoutingModule
  ],
  declarations: [EasSafetypassBadgePage]
})
export class EasSafetypassBadgePageModule {}
