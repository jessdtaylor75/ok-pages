import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardX1PageRoutingModule } from './card-x1-routing.module';

import { CardX1Page } from './card-x1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardX1PageRoutingModule
  ],
  declarations: [CardX1Page]
})
export class CardX1PageModule {}
