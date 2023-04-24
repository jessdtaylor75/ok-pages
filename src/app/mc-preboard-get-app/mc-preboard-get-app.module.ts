import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { McPreboardGetAppPageRoutingModule } from './mc-preboard-get-app-routing.module';

import { McPreboardGetAppPage } from './mc-preboard-get-app.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    McPreboardGetAppPageRoutingModule
  ],
  declarations: [McPreboardGetAppPage]
})
export class McPreboardGetAppPageModule {}
