import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonaX2PageRoutingModule } from './persona-x2-routing.module';

import { PersonaX2Page } from './persona-x2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonaX2PageRoutingModule
  ],
  declarations: [PersonaX2Page]
})
export class PersonaX2PageModule {}
