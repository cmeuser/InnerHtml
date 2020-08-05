import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocumentPageRoutingModule } from './document-routing.module';

import { DocumentPage } from './document.page';

import { KeepHtmlPipe } from '../../pipes/keep-html.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocumentPageRoutingModule
  ],
  declarations: [DocumentPage, KeepHtmlPipe],
  exports: [
    KeepHtmlPipe
  ]
})
export class DocumentPageModule {}
