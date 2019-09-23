import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AdminService } from '../admin/admin.service';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ReplyService {

  constructor(
    private db: AngularFirestore,
    private adminService: AdminService,
    private snackBar: MatSnackBar,
  ) { }

  replyGetList() {
    return this.db.collection('linebot').doc('1602425210').get();
  }

  replyGetById(replyId: string) {
    return this.db.collection('linebot/1602425210/reply').doc(replyId).valueChanges();
  }

  replyAdd(newKeyword: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.db.collection('linebot/1602425210/reply', ref => ref.where('text', '==', newKeyword)).get().subscribe(
        (v) => {
          // 已經存在
          if (v.empty === true) {
            const uid = this.adminService.admin.uid;
            this.db.collection('linebot/1602425210/reply').add({
              keyword: newKeyword,
              allowUsers: [uid],
              template: {
                type: 'text',
                text: newKeyword,
              },
            });
          } else {
            this.snackBar.open(newKeyword + ' 關鍵字已經存在', '', { duration: 2000 }).afterDismissed();
          }
          resolve();
        },
      );
    });

  }

  replyWhere() {
    const uid = this.adminService.admin.uid;
    return this.db.collection('linebot/1602425210/reply', ref => ref.where('allowUsers', 'array-contains', uid)).get();
  }
}
