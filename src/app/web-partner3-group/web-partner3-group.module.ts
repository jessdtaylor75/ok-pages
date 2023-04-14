import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebPartner3GroupPageRoutingModule } from './web-partner3-group-routing.module';

import { WebPartner3GroupPage } from './web-partner3-group.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebPartner3GroupPageRoutingModule
  ],
  declarations: [WebPartner3GroupPage]
})
export class WebPartner3GroupPageModule {}
