import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  constructor(public firestore:AngularFirestore, public auth:AngularFireAuth,public router:Router) { }

  ngOnInit() {
  }
  SignOut() {
    return this.auth.signOut().then(() => {
      this.router.navigate(['login']);
    })
  }
  getInfo()
  {
    
  }
}
