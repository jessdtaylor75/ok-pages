import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Hii5ReviewVideoPageRoutingModule } from './hii5-review-video-routing.module';

import { Hii5ReviewVideoPage } from './hii5-review-video.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Hii5ReviewVideoPageRoutingModule
  ],
  declarations: [Hii5ReviewVideoPage]
})
export class Hii5ReviewVideoPageModule {}
