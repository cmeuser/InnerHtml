import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BottomsheetPageRoutingModule } from './bottomsheet-routing.module';

import { BottomsheetPage } from './bottomsheet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BottomsheetPageRoutingModule
  ],
  declarations: [BottomsheetPage]
})
export class BottomsheetPageModule {}
