import { Component, ViewEncapsulation } from '@angular/core';
import { DocumentService } from '../../services/document.service';
import { ModalController, PopoverController } from '@ionic/angular';
import { BottomsheetPage } from '../bottomsheet/bottomsheet.page';
import { PopoverPage } from '../popover/popover.page';

@Component({
  selector: 'app-document',
  templateUrl: './document.page.html',
  styleUrls: ['./document.page.scss'],
  //encapsulation: ViewEncapsulation.ShadowDom,
})
export class DocumentPage {

  document;

  constructor(private documentService: DocumentService, private modalCtrl: ModalController, private popoverCtrl: PopoverController) {
    this.documentService.getDocument().then((data) => {
      this.document = data;
    });
   }

   async presentPopover(event) {
    const popover = await this.popoverCtrl.create({
      component: PopoverPage,
      event,
    });

    return await popover.present();
  }



   async presentBottomsheet() {

    const presentModel = await this.modalCtrl.create({
      component: BottomsheetPage,
      componentProps: {},
      showBackdrop: true,
      cssClass: 'bottomsheet',
    });

    return await presentModel.present();
  }

}
