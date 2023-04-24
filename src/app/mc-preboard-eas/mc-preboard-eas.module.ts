import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { McPreboardEasPageRoutingModule } from './mc-preboard-eas-routing.module';

import { McPreboardEasPage } from './mc-preboard-eas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    McPreboardEasPageRoutingModule
  ],
  declarations: [McPreboardEasPage]
})
export class McPreboardEasPageModule {}
