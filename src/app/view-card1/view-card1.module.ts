import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewCard1PageRoutingModule } from './view-card1-routing.module';

import { ViewCard1Page } from './view-card1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewCard1PageRoutingModule
  ],
  declarations: [ViewCard1Page]
})
export class ViewCard1PageModule {}
