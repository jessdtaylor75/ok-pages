import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsentDocument1PageRoutingModule } from './consent-document1-routing.module';

import { ConsentDocument1Page } from './consent-document1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsentDocument1PageRoutingModule
  ],
  declarations: [ConsentDocument1Page]
})
export class ConsentDocument1PageModule {}
