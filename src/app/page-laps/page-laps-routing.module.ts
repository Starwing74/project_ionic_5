import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageLapsPage } from './page-laps.page';

const routes: Routes = [
  {
    path: '',
    component: PageLapsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageLapsPageRoutingModule {}
