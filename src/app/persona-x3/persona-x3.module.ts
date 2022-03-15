import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonaX3PageRoutingModule } from './persona-x3-routing.module';

import { PersonaX3Page } from './persona-x3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonaX3PageRoutingModule
  ],
  declarations: [PersonaX3Page]
})
export class PersonaX3PageModule {}
