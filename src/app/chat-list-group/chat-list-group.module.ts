import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatListGroupPageRoutingModule } from './chat-list-group-routing.module';

import { ChatListGroupPage } from './chat-list-group.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatListGroupPageRoutingModule
  ],
  declarations: [ChatListGroupPage]
})
export class ChatListGroupPageModule {}
