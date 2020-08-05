import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'document',
    loadChildren: () => import('./pages/document/document.module').then( m => m.DocumentPageModule)
  },
  {
    path: '',
    redirectTo: 'document',
    pathMatch: 'full'
  },
  {
    path: 'bottomsheet',
    loadChildren: () => import('./pages/bottomsheet/bottomsheet.module').then( m => m.BottomsheetPageModule)
  },
  {
    path: 'popover',
    loadChildren: () => import('./pages/popover/popover.module').then( m => m.PopoverPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
