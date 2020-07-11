import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewHcControlsPageRoutingModule } from './view-hc-controls-routing.module';

import { ViewHcControlsPage } from './view-hc-controls.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewHcControlsPageRoutingModule
  ],
  declarations: [ViewHcControlsPage]
})
export class ViewHcControlsPageModule {}
