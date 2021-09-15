import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PassChecklistStopPageRoutingModule } from './pass-checklist-stop-routing.module';

import { PassChecklistStopPage } from './pass-checklist-stop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PassChecklistStopPageRoutingModule
  ],
  declarations: [PassChecklistStopPage]
})
export class PassChecklistStopPageModule {}
