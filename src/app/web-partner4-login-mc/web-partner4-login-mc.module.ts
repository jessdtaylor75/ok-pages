import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebPartner4LoginMcPageRoutingModule } from './web-partner4-login-mc-routing.module';

import { WebPartner4LoginMcPage } from './web-partner4-login-mc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebPartner4LoginMcPageRoutingModule
  ],
  declarations: [WebPartner4LoginMcPage]
})
export class WebPartner4LoginMcPageModule {}
