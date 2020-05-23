import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeScannerPageRoutingModule } from './home-scanner-routing.module';

import { HomeScannerPage } from './home-scanner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeScannerPageRoutingModule
  ],
  declarations: [HomeScannerPage]
})
export class HomeScannerPageModule {}
