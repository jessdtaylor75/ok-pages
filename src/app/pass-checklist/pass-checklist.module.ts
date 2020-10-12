import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PassChecklistPageRoutingModule } from './pass-checklist-routing.module';

import { PassChecklistPage } from './pass-checklist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PassChecklistPageRoutingModule
  ],
  declarations: [PassChecklistPage]
})
export class PassChecklistPageModule {}
