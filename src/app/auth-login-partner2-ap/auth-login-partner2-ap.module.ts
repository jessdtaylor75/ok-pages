import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthLoginPartner2ApPageRoutingModule } from './auth-login-partner2-ap-routing.module';

import { AuthLoginPartner2ApPage } from './auth-login-partner2-ap.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthLoginPartner2ApPageRoutingModule
  ],
  declarations: [AuthLoginPartner2ApPage]
})
export class AuthLoginPartner2ApPageModule {}
