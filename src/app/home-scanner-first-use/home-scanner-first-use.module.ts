import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeScannerFirstUsePageRoutingModule } from './home-scanner-first-use-routing.module';

import { HomeScannerFirstUsePage } from './home-scanner-first-use.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeScannerFirstUsePageRoutingModule
  ],
  declarations: [HomeScannerFirstUsePage]
})
export class HomeScannerFirstUsePageModule {}
