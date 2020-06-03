import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewCard3PageRoutingModule } from './view-card3-routing.module';

import { ViewCard3Page } from './view-card3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewCard3PageRoutingModule
  ],
  declarations: [ViewCard3Page]
})
export class ViewCard3PageModule {}
