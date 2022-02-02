import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'page-chrono',
    loadChildren: () => import('./page-chrono/page-chrono.module').then( m => m.PageChronoPageModule)
  },
  {
    path: 'page-laps',
    loadChildren: () => import('./page-laps/page-laps.module').then( m => m.PageLapsPageModule)
  },
  {
    path: 'page-records',
    loadChildren: () => import('./page-records/page-records.module').then( m => m.PageRecordsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
