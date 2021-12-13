import { Component, OnInit, Input } from '@angular/core';
import { NewsService } from './../services/news.service';
import { Datum } from '../interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements  OnInit{

  constructor(private NewsService:NewsService) {}

  public data:Datum[]=[]


  ngOnInit()
   {
    this.NewsService.getNews().subscribe(data => this.data.push(...data ));
  }
}
