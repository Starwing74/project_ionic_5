import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageChronoPage } from './page-chrono.page';

const routes: Routes = [
  {
    path: '',
    component: PageChronoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageChronoPageRoutingModule {}
