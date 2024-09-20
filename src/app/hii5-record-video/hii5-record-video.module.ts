import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Hii5RecordVideoPageRoutingModule } from './hii5-record-video-routing.module';

import { Hii5RecordVideoPage } from './hii5-record-video.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Hii5RecordVideoPageRoutingModule
  ],
  declarations: [Hii5RecordVideoPage]
})
export class Hii5RecordVideoPageModule {}
