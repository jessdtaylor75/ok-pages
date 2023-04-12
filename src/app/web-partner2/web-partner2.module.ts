import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebPartner2PageRoutingModule } from './web-partner2-routing.module';

import { WebPartner2Page } from './web-partner2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebPartner2PageRoutingModule
  ],
  declarations: [WebPartner2Page]
})
export class WebPartner2PageModule {}
