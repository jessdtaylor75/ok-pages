import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LegalAgreementsPageRoutingModule } from './legal-agreements-routing.module';

import { LegalAgreementsPage } from './legal-agreements.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LegalAgreementsPageRoutingModule
  ],
  declarations: [LegalAgreementsPage]
})
export class LegalAgreementsPageModule {}
