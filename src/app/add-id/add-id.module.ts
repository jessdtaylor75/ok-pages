import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddIdPageRoutingModule } from './add-id-routing.module';

import { AddIdPage } from './add-id.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddIdPageRoutingModule
  ],
  declarations: [AddIdPage]
})
export class AddIdPageModule {}
