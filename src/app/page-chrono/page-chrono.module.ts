import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageChronoPageRoutingModule } from './page-chrono-routing.module';

import { PageChronoPage } from './page-chrono.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageChronoPageRoutingModule
  ],
  declarations: [PageChronoPage]
})
export class PageChronoPageModule {}
