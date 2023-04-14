import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebPartner5PageRoutingModule } from './web-partner5-routing.module';

import { WebPartner5Page } from './web-partner5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebPartner5PageRoutingModule
  ],
  declarations: [WebPartner5Page]
})
export class WebPartner5PageModule {}
