import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebPartner2McprogramPageRoutingModule } from './web-partner2-mcprogram-routing.module';

import { WebPartner2McprogramPage } from './web-partner2-mcprogram.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebPartner2McprogramPageRoutingModule
  ],
  declarations: [WebPartner2McprogramPage]
})
export class WebPartner2McprogramPageModule {}
