import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageLapsPageRoutingModule } from './page-laps-routing.module';

import { PageLapsPage } from './page-laps.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageLapsPageRoutingModule
  ],
  declarations: [PageLapsPage]
})
export class PageLapsPageModule {}
