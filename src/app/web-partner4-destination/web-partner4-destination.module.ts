import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebPartner4DestinationPageRoutingModule } from './web-partner4-destination-routing.module';

import { WebPartner4DestinationPage } from './web-partner4-destination.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebPartner4DestinationPageRoutingModule
  ],
  declarations: [WebPartner4DestinationPage]
})
export class WebPartner4DestinationPageModule {}
