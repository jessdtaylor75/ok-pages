import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifyServiceMcPageRoutingModule } from './verify-service-mc-routing.module';

import { VerifyServiceMcPage } from './verify-service-mc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerifyServiceMcPageRoutingModule
  ],
  declarations: [VerifyServiceMcPage]
})
export class VerifyServiceMcPageModule {}
