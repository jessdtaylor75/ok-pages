import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PassChecklistFixPageRoutingModule } from './pass-checklist-fix-routing.module';

import { PassChecklistFixPage } from './pass-checklist-fix.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PassChecklistFixPageRoutingModule
  ],
  declarations: [PassChecklistFixPage]
})
export class PassChecklistFixPageModule {}
