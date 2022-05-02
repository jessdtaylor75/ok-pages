import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeletePersonaPageRoutingModule } from './delete-persona-routing.module';

import { DeletePersonaPage } from './delete-persona.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeletePersonaPageRoutingModule
  ],
  declarations: [DeletePersonaPage]
})
export class DeletePersonaPageModule {}
