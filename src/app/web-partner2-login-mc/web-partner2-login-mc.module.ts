import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebPartner2LoginMcPageRoutingModule } from './web-partner2-login-mc-routing.module';

import { WebPartner2LoginMcPage } from './web-partner2-login-mc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebPartner2LoginMcPageRoutingModule
  ],
  declarations: [WebPartner2LoginMcPage]
})
export class WebPartner2LoginMcPageModule {}
