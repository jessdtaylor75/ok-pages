import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoInsurancePageRoutingModule } from './no-insurance-routing.module';

import { NoInsurancePage } from './no-insurance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoInsurancePageRoutingModule
  ],
  declarations: [NoInsurancePage]
})
export class NoInsurancePageModule {}
