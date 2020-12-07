import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestLocationPageRoutingModule } from './test-location-routing.module';

import { TestLocationPage } from './test-location.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestLocationPageRoutingModule
  ],
  declarations: [TestLocationPage]
})
export class TestLocationPageModule {}
