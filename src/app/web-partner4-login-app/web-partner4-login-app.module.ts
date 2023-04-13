import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebPartner4LoginAppPageRoutingModule } from './web-partner4-login-app-routing.module';

import { WebPartner4LoginAppPage } from './web-partner4-login-app.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebPartner4LoginAppPageRoutingModule
  ],
  declarations: [WebPartner4LoginAppPage]
})
export class WebPartner4LoginAppPageModule {}
