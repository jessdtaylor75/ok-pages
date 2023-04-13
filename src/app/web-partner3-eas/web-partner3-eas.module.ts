import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebPartner3EasPageRoutingModule } from './web-partner3-eas-routing.module';

import { WebPartner3EasPage } from './web-partner3-eas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebPartner3EasPageRoutingModule
  ],
  declarations: [WebPartner3EasPage]
})
export class WebPartner3EasPageModule {}
