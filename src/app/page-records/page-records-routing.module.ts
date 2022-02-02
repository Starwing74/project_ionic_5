import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageRecordsPage } from './page-records.page';

const routes: Routes = [
  {
    path: '',
    component: PageRecordsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageRecordsPageRoutingModule {}
