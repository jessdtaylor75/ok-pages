import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewId2PageRoutingModule } from './view-id2-routing.module';

import { ViewId2Page } from './view-id2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewId2PageRoutingModule
  ],
  declarations: [ViewId2Page]
})
export class ViewId2PageModule {}
