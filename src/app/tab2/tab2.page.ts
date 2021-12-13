import { Component,Input } from '@angular/core';
import { Datum } from '../interfaces';
import { NewsService } from './../services/news.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public categories: string[] = ['general','business','entertainment','health','science','sports','technology'];
  public selectedCategory: string = this.categories[0];
  public data:Datum[]=[];
  @Input() datas: Datum;
  constructor(private NewsService:NewsService) {}

  ngOnInit(){
      
    this.NewsService.getNewsByCategory(this.selectedCategory).subscribe( data => {this.data = [ ...data ]
  })
}
segmentChanged( ev: Event ) {
  this.selectedCategory = (ev as CustomEvent).detail.value;
  this.NewsService.getNewsByCategory(this.selectedCategory).subscribe( data => {this.data = [ ...data ],console.log(data)});
}
}
