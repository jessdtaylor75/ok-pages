import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditIdPageRoutingModule } from './edit-id-routing.module';

import { EditIdPage } from './edit-id.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditIdPageRoutingModule
  ],
  declarations: [EditIdPage]
})
export class EditIdPageModule {}
