import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthLoginPartner2McPageRoutingModule } from './auth-login-partner2-mc-routing.module';

import { AuthLoginPartner2McPage } from './auth-login-partner2-mc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthLoginPartner2McPageRoutingModule
  ],
  declarations: [AuthLoginPartner2McPage]
})
export class AuthLoginPartner2McPageModule {}
