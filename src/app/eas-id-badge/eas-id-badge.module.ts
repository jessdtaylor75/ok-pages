import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EasIdBadgePageRoutingModule } from './eas-id-badge-routing.module';

import { EasIdBadgePage } from './eas-id-badge.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EasIdBadgePageRoutingModule
  ],
  declarations: [EasIdBadgePage]
})
export class EasIdBadgePageModule {}
