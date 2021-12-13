import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class FireserviceService {

  constructor(public firestore:AngularFirestore, public auth:AngularFireAuth, public router:Router) { }
  loginWithEmail(data) {
    return this.auth.signInWithEmailAndPassword(data.email, data.password);
  }
  signup(data) {
    return this.auth.createUserWithEmailAndPassword(data.email, data.password);
  }
  saveDetails(data) {
    return this.firestore.collection("users").doc(data.uid).set(data);
  }
  getDetails(data) {
    return this.firestore.collection("users").doc(data.uid).valueChanges();
  }
  SignOut() {
    return this.auth.signOut().then(() => {
      this.router.navigate(['sign-in']);
    })
  }
}
