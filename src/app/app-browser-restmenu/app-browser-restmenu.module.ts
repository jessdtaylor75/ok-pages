import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppBrowserRestmenuPageRoutingModule } from './app-browser-restmenu-routing.module';

import { AppBrowserRestmenuPage } from './app-browser-restmenu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppBrowserRestmenuPageRoutingModule
  ],
  declarations: [AppBrowserRestmenuPage]
})
export class AppBrowserRestmenuPageModule {}
