import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Datum, LoadNews,ArticlesByCategoryAndPage, Language } from '../interfaces';
import {map} from "rxjs/operators"
import { environment } from 'src/environments/environment';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private articlesByCategoryAndPage: ArticlesByCategoryAndPage = {};
  constructor(private http:HttpClient) { }
  private executeQuery<T>( endpoint: string ) {
    console.log('Petición HTTP realizada');
    return this.http.get<T>(`${ apiUrl }${ endpoint }`, {
    })
  }

  getTopHeadlinesByCategory( category: string, loadMore: boolean = false ):Observable<Datum[]> {

    if ( loadMore ) {
      return this.getArticlesByCategory(category);
    }
    if ( this.articlesByCategoryAndPage[category] ) {
      return of(this.articlesByCategoryAndPage[category].data);
    }
    return this.getArticlesByCategory(category);
  }

  getNews():Observable<Datum[]>
  {
    return this.http.get<LoadNews>('http://api.mediastack.com/v1/news?access_key=412112dbca30bf8f826d9b7ad1096fd1&languages=es').pipe(map(({data})=>data));
  }

  getNewsByCategory(category:string,loadMore:boolean=false):Observable<Datum[]>
  {
    return this.http.get<LoadNews>(`http://api.mediastack.com/v1/news?access_key=412112dbca30bf8f826d9b7ad1096fd1&languages=es&categories=${category}`).pipe(map(({data})=>data));
  }

   getArticlesByCategory(category:string):Observable<Datum[]>
   {
    if ( Object.keys( this.articlesByCategoryAndPage ).includes(category) ) {
      // Ya existe
       /* this.articlesByCategoryAndPage[category].page += 0; */
    } else 
      {
      // No existe
      this.articlesByCategoryAndPage[category] = {
        page: 0,
        data:[]
      }
   }

   const page = this.articlesByCategoryAndPage[category].page + 1;

   return this.executeQuery<LoadNews>(`&category=${category}&languages=es&page=${page}`).pipe(map(({data})=>{

    if ( data.length === 0 ) return this.articlesByCategoryAndPage[category].data;
    this.articlesByCategoryAndPage[category] = {
      page: page,
      data: [ ...this.articlesByCategoryAndPage[category].data, ...data]
    }
    return this.articlesByCategoryAndPage[category].data;
      })
    );
  }
}
