import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BottomsheetPage } from './bottomsheet.page';

const routes: Routes = [
  {
    path: '',
    component: BottomsheetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BottomsheetPageRoutingModule {}
