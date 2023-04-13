import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebPartner4PageRoutingModule } from './web-partner4-routing.module';

import { WebPartner4Page } from './web-partner4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebPartner4PageRoutingModule
  ],
  declarations: [WebPartner4Page]
})
export class WebPartner4PageModule {}
