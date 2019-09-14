import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Admin } from 'src/app/interface/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  admin: Admin = null;
  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFirestore,
  ) { }

  adminGetByAuthState() {
    this.afAuth.authState.subscribe(
      (user) => {
        console.log('authState', user);
        if (user === null) {
          this.admin = null;
          return;
        }
        this.db.collection('linebot/1602425210/admin').doc(user.uid).valueChanges().subscribe(
          (v) => {
            if (v !== undefined) {
              const data = v as Admin;
              this.admin = data;
            }
          },
        );
      }
    );
  }

  adminUpdate() {
    return this.db.collection('linebot/1602425210/admin').doc(this.admin.uid).set(this.admin);
  }
}
