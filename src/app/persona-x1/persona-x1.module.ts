import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonaX1PageRoutingModule } from './persona-x1-routing.module';

import { PersonaX1Page } from './persona-x1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonaX1PageRoutingModule
  ],
  declarations: [PersonaX1Page]
})
export class PersonaX1PageModule {}
