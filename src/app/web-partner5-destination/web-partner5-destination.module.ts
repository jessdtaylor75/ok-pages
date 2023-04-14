import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebPartner5DestinationPageRoutingModule } from './web-partner5-destination-routing.module';

import { WebPartner5DestinationPage } from './web-partner5-destination.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebPartner5DestinationPageRoutingModule
  ],
  declarations: [WebPartner5DestinationPage]
})
export class WebPartner5DestinationPageModule {}
