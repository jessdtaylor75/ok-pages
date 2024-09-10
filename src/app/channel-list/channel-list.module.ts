import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChannelListPageRoutingModule } from './channel-list-routing.module';

import { ChannelListPage } from './channel-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChannelListPageRoutingModule
  ],
  declarations: [ChannelListPage]
})
export class ChannelListPageModule {}
