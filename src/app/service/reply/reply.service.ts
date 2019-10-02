import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AdminService } from '../admin/admin.service';
import { MatSnackBar } from '@angular/material';
import { Reply } from 'src/app/interface/reply';

@Injectable({
  providedIn: 'root'
})
export class ReplyService {
  constructor(
    private db: AngularFirestore,
    private adminService: AdminService,
    private snackBar: MatSnackBar,
  ) { }

  replyGetById(replyId: string) {
    const channelID = this.adminService.admin.channelID;
    return this.db.collection(`linebot/${channelID}/reply`).doc(replyId).valueChanges();
  }

  replyUpdateById(replyId: string, reply: Reply) {
    const channelID = this.adminService.admin.channelID;
    return this.db.collection(`linebot/${channelID}/reply`).doc(replyId).update(reply);
  }

  replyAdd(newKeyword: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const channelID = this.adminService.admin.channelID;
      this.db.collection(`linebot/${channelID}/reply`, ref => ref.where('text', '==', newKeyword)).get().subscribe(
        (v) => {
          // 已經存在
          if (v.empty === true) {
            const uid = this.adminService.admin.uid;
            this.db.collection(`linebot/${channelID}/reply`).add({
              keyword: newKeyword,
              allowUsers: [uid],
              template: {
                type: 'text',
                text: newKeyword,
              },
              status: 1,
            } as Reply);
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
    const channelID = this.adminService.admin.channelID;
    if (this.adminService.admin.role === '1') {
      return this.db.collection(`linebot/${channelID}/reply`, ref =>
        ref.
          where('status', '==', 1)
      ).get();
    }
    return this.db.collection(`linebot/${channelID}/reply`, ref =>
      ref.
        where('allowUsers', 'array-contains', uid).
        where('status', '==', 1)
    ).get();
  }
}
