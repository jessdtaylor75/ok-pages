import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingsSecurityPageRoutingModule } from './settings-security-routing.module';

import { SettingsSecurityPage } from './settings-security.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingsSecurityPageRoutingModule
  ],
  declarations: [SettingsSecurityPage]
})
export class SettingsSecurityPageModule {}
