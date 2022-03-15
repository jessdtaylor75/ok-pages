import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IdDocumentsPageRoutingModule } from './id-documents-routing.module';

import { IdDocumentsPage } from './id-documents.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IdDocumentsPageRoutingModule
  ],
  declarations: [IdDocumentsPage]
})
export class IdDocumentsPageModule {}
