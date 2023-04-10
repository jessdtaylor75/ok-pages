import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebPartner1JoinPageRoutingModule } from './web-partner1-join-routing.module';

import { WebPartner1JoinPage } from './web-partner1-join.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebPartner1JoinPageRoutingModule
  ],
  declarations: [WebPartner1JoinPage]
})
export class WebPartner1JoinPageModule {}
