import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebPartner1LoginPageRoutingModule } from './web-partner1-login-routing.module';

import { WebPartner1LoginPage } from './web-partner1-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebPartner1LoginPageRoutingModule
  ],
  declarations: [WebPartner1LoginPage]
})
export class WebPartner1LoginPageModule {}
