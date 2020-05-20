import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewPersonalInfoPageRoutingModule } from './view-personal-info-routing.module';

import { ViewPersonalInfoPage } from './view-personal-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewPersonalInfoPageRoutingModule
  ],
  declarations: [ViewPersonalInfoPage]
})
export class ViewPersonalInfoPageModule {}
