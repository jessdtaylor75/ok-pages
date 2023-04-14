import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebPartner5EasPageRoutingModule } from './web-partner5-eas-routing.module';

import { WebPartner5EasPage } from './web-partner5-eas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebPartner5EasPageRoutingModule
  ],
  declarations: [WebPartner5EasPage]
})
export class WebPartner5EasPageModule {}
