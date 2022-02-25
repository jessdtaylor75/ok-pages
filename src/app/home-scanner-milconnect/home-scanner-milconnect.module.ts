import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeScannerMilconnectPageRoutingModule } from './home-scanner-milconnect-routing.module';

import { HomeScannerMilconnectPage } from './home-scanner-milconnect.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeScannerMilconnectPageRoutingModule
  ],
  declarations: [HomeScannerMilconnectPage]
})
export class HomeScannerMilconnectPageModule {}
