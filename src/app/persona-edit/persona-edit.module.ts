import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonaEditPageRoutingModule } from './persona-edit-routing.module';

import { PersonaEditPage } from './persona-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonaEditPageRoutingModule
  ],
  declarations: [PersonaEditPage]
})
export class PersonaEditPageModule {}
