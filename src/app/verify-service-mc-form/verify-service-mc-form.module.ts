import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifyServiceMcFormPageRoutingModule } from './verify-service-mc-form-routing.module';

import { VerifyServiceMcFormPage } from './verify-service-mc-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerifyServiceMcFormPageRoutingModule
  ],
  declarations: [VerifyServiceMcFormPage]
})
export class VerifyServiceMcFormPageModule {}
