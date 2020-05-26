import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewPasscodePageRoutingModule } from './new-passcode-routing.module';

import { NewPasscodePage } from './new-passcode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewPasscodePageRoutingModule
  ],
  declarations: [NewPasscodePage]
})
export class NewPasscodePageModule {}
