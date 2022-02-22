import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MilitaryConnectPageRoutingModule } from './military-connect-routing.module';

import { MilitaryConnectPage } from './military-connect.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MilitaryConnectPageRoutingModule
  ],
  declarations: [MilitaryConnectPage]
})
export class MilitaryConnectPageModule {}
