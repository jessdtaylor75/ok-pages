import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsentDocsPageRoutingModule } from './consent-docs-routing.module';

import { ConsentDocsPage } from './consent-docs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsentDocsPageRoutingModule
  ],
  declarations: [ConsentDocsPage]
})
export class ConsentDocsPageModule {}
