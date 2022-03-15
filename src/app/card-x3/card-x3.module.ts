import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardX3PageRoutingModule } from './card-x3-routing.module';

import { CardX3Page } from './card-x3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardX3PageRoutingModule
  ],
  declarations: [CardX3Page]
})
export class CardX3PageModule {}
