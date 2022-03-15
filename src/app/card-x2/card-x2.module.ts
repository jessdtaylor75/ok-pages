import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardX2PageRoutingModule } from './card-x2-routing.module';

import { CardX2Page } from './card-x2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardX2PageRoutingModule
  ],
  declarations: [CardX2Page]
})
export class CardX2PageModule {}
