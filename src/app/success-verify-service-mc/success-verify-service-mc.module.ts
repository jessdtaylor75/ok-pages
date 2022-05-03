import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuccessVerifyServiceMcPageRoutingModule } from './success-verify-service-mc-routing.module';

import { SuccessVerifyServiceMcPage } from './success-verify-service-mc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuccessVerifyServiceMcPageRoutingModule
  ],
  declarations: [SuccessVerifyServiceMcPage]
})
export class SuccessVerifyServiceMcPageModule {}
