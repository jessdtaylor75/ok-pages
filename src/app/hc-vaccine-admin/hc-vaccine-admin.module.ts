import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HcVaccineAdminPageRoutingModule } from './hc-vaccine-admin-routing.module';

import { HcVaccineAdminPage } from './hc-vaccine-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HcVaccineAdminPageRoutingModule
  ],
  declarations: [HcVaccineAdminPage]
})
export class HcVaccineAdminPageModule {}
