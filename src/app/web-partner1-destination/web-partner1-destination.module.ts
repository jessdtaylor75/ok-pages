import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebPartner1DestinationPageRoutingModule } from './web-partner1-destination-routing.module';

import { WebPartner1DestinationPage } from './web-partner1-destination.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebPartner1DestinationPageRoutingModule
  ],
  declarations: [WebPartner1DestinationPage]
})
export class WebPartner1DestinationPageModule {}
