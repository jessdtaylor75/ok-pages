import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConnectHcTestPageRoutingModule } from './connect-hc-test-routing.module';

import { ConnectHcTestPage } from './connect-hc-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConnectHcTestPageRoutingModule
  ],
  declarations: [ConnectHcTestPage]
})
export class ConnectHcTestPageModule {}
