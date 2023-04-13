import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebPartner3LoginPageRoutingModule } from './web-partner3-login-routing.module';

import { WebPartner3LoginPage } from './web-partner3-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebPartner3LoginPageRoutingModule
  ],
  declarations: [WebPartner3LoginPage]
})
export class WebPartner3LoginPageModule {}
