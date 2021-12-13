import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';
@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  targetUrl : string ;
  entries : Array<any> = [];
  declare RSSParser:any;
  constructor(public navCtrl: NavController) {
  }
  ngOnInit() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RSSPage');

}
openUrl(entry){

    window.open(entry.link,"_system");

}
parseUrlWrapper(){

    return new Promise((resolve,reject)=>{
    this.RSSParser.parseURL(this.targetUrl, function(err, parsed) {
        console.log(parsed.feed.title);
        console.log(parsed.feed.entries);
        if(err){
        reject(err);
        }
        resolve(parsed.feed.entries);
    });
    });

}
parseUrl(){
    this.parseUrlWrapper().then((entries : Array<any>)=>{
        this.entries = entries;
    })
}
}
