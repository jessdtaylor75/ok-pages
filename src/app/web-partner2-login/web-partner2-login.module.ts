import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebPartner2LoginPageRoutingModule } from './web-partner2-login-routing.module';

import { WebPartner2LoginPage } from './web-partner2-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebPartner2LoginPageRoutingModule
  ],
  declarations: [WebPartner2LoginPage]
})
export class WebPartner2LoginPageModule {}
