import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EasMySpStatusPageRoutingModule } from './eas-my-sp-status-routing.module';

import { EasMySpStatusPage } from './eas-my-sp-status.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EasMySpStatusPageRoutingModule
  ],
  declarations: [EasMySpStatusPage]
})
export class EasMySpStatusPageModule {}
