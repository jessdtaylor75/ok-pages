import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyHcStatusPageRoutingModule } from './my-hc-status-routing.module';

import { MyHcStatusPage } from './my-hc-status.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyHcStatusPageRoutingModule
  ],
  declarations: [MyHcStatusPage]
})
export class MyHcStatusPageModule {}
