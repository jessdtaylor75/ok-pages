import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChannelDetailPageRoutingModule } from './channel-detail-routing.module';

import { ChannelDetailPage } from './channel-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChannelDetailPageRoutingModule
  ],
  declarations: [ChannelDetailPage]
})
export class ChannelDetailPageModule {}
