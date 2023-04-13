import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebPartner2LoginAppPageRoutingModule } from './web-partner2-login-app-routing.module';

import { WebPartner2LoginAppPage } from './web-partner2-login-app.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebPartner2LoginAppPageRoutingModule
  ],
  declarations: [WebPartner2LoginAppPage]
})
export class WebPartner2LoginAppPageModule {}
