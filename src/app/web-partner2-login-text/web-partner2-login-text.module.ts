import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebPartner2LoginTextPageRoutingModule } from './web-partner2-login-text-routing.module';

import { WebPartner2LoginTextPage } from './web-partner2-login-text.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebPartner2LoginTextPageRoutingModule
  ],
  declarations: [WebPartner2LoginTextPage]
})
export class WebPartner2LoginTextPageModule {}
