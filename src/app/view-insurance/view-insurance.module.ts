import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewInsurancePageRoutingModule } from './view-insurance-routing.module';

import { ViewInsurancePage } from './view-insurance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewInsurancePageRoutingModule
  ],
  declarations: [ViewInsurancePage]
})
export class ViewInsurancePageModule {}
