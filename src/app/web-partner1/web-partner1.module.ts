import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebPartner1PageRoutingModule } from './web-partner1-routing.module';

import { WebPartner1Page } from './web-partner1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebPartner1PageRoutingModule
  ],
  declarations: [WebPartner1Page]
})
export class WebPartner1PageModule {}
