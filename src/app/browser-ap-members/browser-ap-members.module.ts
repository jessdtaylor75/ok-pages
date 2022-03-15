import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrowserApMembersPageRoutingModule } from './browser-ap-members-routing.module';

import { BrowserApMembersPage } from './browser-ap-members.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrowserApMembersPageRoutingModule
  ],
  declarations: [BrowserApMembersPage]
})
export class BrowserApMembersPageModule {}
