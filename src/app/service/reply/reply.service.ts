import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AdminService } from '../admin/admin.service';

@Injectable({
  providedIn: 'root'
})
export class ReplyService {

  constructor(
    private db: AngularFirestore,
    private adminService: AdminService,
  ) { }

  replyGetList() {
    return this.db.collection('linebot').doc('1602425210').get();
  }

  replyAdd() {
    const uid = this.adminService.admin.uid;
    return this.db.collection('linebot/1602425210/reply').doc('aaa').set({ type: 'text', text: 'GG', allowUsers: [uid] });
  }

  replyWhere() {
    const uid = this.adminService.admin.uid;
    return this.db.collection('linebot/1602425210/reply', ref => ref.where('allowUsers', 'array-contains', uid)).get();
  }
}
