import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewCard2PageRoutingModule } from './view-card2-routing.module';

import { ViewCard2Page } from './view-card2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewCard2PageRoutingModule
  ],
  declarations: [ViewCard2Page]
})
export class ViewCard2PageModule {}
