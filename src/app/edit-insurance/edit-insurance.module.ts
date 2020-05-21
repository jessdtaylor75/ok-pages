import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditInsurancePageRoutingModule } from './edit-insurance-routing.module';

import { EditInsurancePage } from './edit-insurance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditInsurancePageRoutingModule
  ],
  declarations: [EditInsurancePage]
})
export class EditInsurancePageModule {}
