import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebPartner2DestinationPageRoutingModule } from './web-partner2-destination-routing.module';

import { WebPartner2DestinationPage } from './web-partner2-destination.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebPartner2DestinationPageRoutingModule
  ],
  declarations: [WebPartner2DestinationPage]
})
export class WebPartner2DestinationPageModule {}
