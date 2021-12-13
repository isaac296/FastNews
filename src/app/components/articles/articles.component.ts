import { Component, Input,OnInit } from '@angular/core';
import { Datum } from 'src/app/interfaces';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  @Input() data:Datum[];
  constructor() { }

  ngOnInit() {}
}
