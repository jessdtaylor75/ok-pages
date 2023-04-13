import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebPartner3DestinationPageRoutingModule } from './web-partner3-destination-routing.module';

import { WebPartner3DestinationPage } from './web-partner3-destination.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebPartner3DestinationPageRoutingModule
  ],
  declarations: [WebPartner3DestinationPage]
})
export class WebPartner3DestinationPageModule {}
