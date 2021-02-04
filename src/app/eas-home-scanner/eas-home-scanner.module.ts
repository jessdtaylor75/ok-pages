import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EasHomeScannerPageRoutingModule } from './eas-home-scanner-routing.module';

import { EasHomeScannerPage } from './eas-home-scanner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EasHomeScannerPageRoutingModule
  ],
  declarations: [EasHomeScannerPage]
})
export class EasHomeScannerPageModule {}
