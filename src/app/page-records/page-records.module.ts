import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageRecordsPageRoutingModule } from './page-records-routing.module';

import { PageRecordsPage } from './page-records.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageRecordsPageRoutingModule
  ],
  declarations: [PageRecordsPage]
})
export class PageRecordsPageModule {}
