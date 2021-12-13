import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Datum } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private _storage: Storage | null = null;
  private _localArticles: Datum[] = [];

  constructor( private storage: Storage ) { 
    this.init();
  }

  get getLocalArticles() {
    return [ ...this._localArticles ]
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
    this.loadFavorites();
  }

  async saveRemoveArticle( data: Datum ) {

    const exists = this._localArticles.find( localArticle => localArticle.title === data.title );

    if ( exists ) {
      this._localArticles = this._localArticles.filter( localArticle => localArticle.title !== data.title );
    } else {
      this._localArticles = [ data, ...this._localArticles];
    }

    this._storage.set('articles', this._localArticles );

  }

  async loadFavorites() {

    try {
      const articles = await this._storage.get('articles');
      this._localArticles = articles || [];
    } catch (error) {
    }
  }
  articleInFavorites( data: Datum ) {
    return !!this._localArticles.find( localArticle => localArticle.title === data.title );
  }
}