import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirebaseUISignInSuccessWithAuthResult, FirebaseUISignInFailure } from 'firebaseui-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AdminService } from 'src/app/service/admin/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    private db: AngularFirestore,
    private afAuth: AngularFireAuth,
    public adminService: AdminService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.adminService.adminGetByAuthState();
  }

  successCallback(succ: FirebaseUISignInSuccessWithAuthResult) {
    const userUid = succ.authResult.user.uid;
    this.db.collection('linebot/1602425210/admin').doc(userUid).get().subscribe(
      (v) => {
        let admin = v.data();
        if (admin === undefined) {
          admin = {
            uid: userUid,
            displayName: succ.authResult.user.displayName,
            name: succ.authResult.user.displayName,
            email: succ.authResult.user.email,
            emailVerified: succ.authResult.user.emailVerified,
            phoneNumber: succ.authResult.user.phoneNumber,
            photoURL: succ.authResult.user.photoURL,
            role: '0',
          };
          this.db.collection('linebot/1602425210/admin').doc(userUid).set(admin);
        }
        this.router.navigateByUrl(this.adminService.redirectUrl);
      }
    );
  }

  errorCallback(errorData: FirebaseUISignInFailure) {
    console.log('errorCallback', errorData);
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
