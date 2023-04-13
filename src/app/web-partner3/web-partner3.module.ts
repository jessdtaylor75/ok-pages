import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebPartner3PageRoutingModule } from './web-partner3-routing.module';

import { WebPartner3Page } from './web-partner3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebPartner3PageRoutingModule
  ],
  declarations: [WebPartner3Page]
})
export class WebPartner3PageModule {}
