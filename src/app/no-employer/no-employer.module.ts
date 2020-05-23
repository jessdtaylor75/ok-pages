import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoEmployerPageRoutingModule } from './no-employer-routing.module';

import { NoEmployerPage } from './no-employer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoEmployerPageRoutingModule
  ],
  declarations: [NoEmployerPage]
})
export class NoEmployerPageModule {}
