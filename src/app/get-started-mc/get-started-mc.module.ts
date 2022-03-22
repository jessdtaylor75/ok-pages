import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetStartedMcPageRoutingModule } from './get-started-mc-routing.module';

import { GetStartedMcPage } from './get-started-mc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetStartedMcPageRoutingModule
  ],
  declarations: [GetStartedMcPage]
})
export class GetStartedMcPageModule {}
