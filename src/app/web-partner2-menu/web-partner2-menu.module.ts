import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebPartner2MenuPageRoutingModule } from './web-partner2-menu-routing.module';

import { WebPartner2MenuPage } from './web-partner2-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebPartner2MenuPageRoutingModule
  ],
  declarations: [WebPartner2MenuPage]
})
export class WebPartner2MenuPageModule {}
