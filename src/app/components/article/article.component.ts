import { Component, Input } from '@angular/core';
import { ActionSheetButton, ActionSheetController, Platform } from '@ionic/angular';
import { StorageService } from '../../services/storage.service';
import { Datum } from '../../interfaces';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {

  @Input() data: Datum;

  constructor( 
    private platform: Platform,
    private actionSheetCtrl: ActionSheetController,
    private storageService: StorageService,
  ) { }

  openArticle() {
    window.open( this.data.url, '_blank' );
  }


  async onOpenMenu() {

    const articleInFavorite = this.storageService.articleInFavorites(this.data);

    const normalBtns: ActionSheetButton[] = [
      {
        text: articleInFavorite ? 'Remover favorito' : 'Favorito',
        icon: articleInFavorite ? 'heart' : 'heart-outline',
        handler: () => this.onToggleFavorite()
      },
      {
        text: 'Cancelar',
        icon: 'close-outline',
        role: 'cancel',
      }
    ]
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Opciones',
      buttons: normalBtns
    });
    await actionSheet.present();
  }
  onToggleFavorite() {
    this.storageService.saveRemoveArticle(this.data);
  }

}
