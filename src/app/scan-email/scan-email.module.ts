import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScanEmailPageRoutingModule } from './scan-email-routing.module';

import { ScanEmailPage } from './scan-email.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanEmailPageRoutingModule
  ],
  declarations: [ScanEmailPage]
})
export class ScanEmailPageModule {}
