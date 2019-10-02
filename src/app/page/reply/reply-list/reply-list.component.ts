import { Component, OnInit } from '@angular/core';
import { ReplyService } from 'src/app/service/reply/reply.service';
import { ModalService } from 'src/app/service/common/modal/modal.service';
import { ReplyDoc, Reply } from 'src/app/interface/reply';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-reply-list',
  templateUrl: './reply-list.component.html',
  styleUrls: ['./reply-list.component.scss']
})
export class ReplyListComponent implements OnInit {
  replyLists: ReplyDoc[] = [];
  constructor(
    public replyService: ReplyService,
    public modalService: ModalService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.replyLists = [];
    this.replyService.replyWhere().subscribe(
      (v: firebase.firestore.QuerySnapshot) => {
        console.log('vvvvv', v);
        v.forEach(ele => {
          const reply = ele.data() as Reply;
          this.replyLists.push(
            { id: ele.id, data: reply },
          );
          console.log(ele.id, '=>', ele.data());
        });
      },
    );
  }

  addReply() {
    this.modalService.openInput().subscribe(
      (v) => {
        console.log('openInput', v);
        this.replyService.replyAdd(v).then((result) => {
          this.ngOnInit();
        }).catch((err) => {

        });
      },
    );
  }

  delReply(replyDoc: ReplyDoc) {
    const confirmAlert = confirm('確定刪除' + replyDoc.data.keyword + '嗎？');
    if (confirmAlert === true) {
      replyDoc.data.status = 0;
      this.replyService.replyUpdateById(replyDoc.id, replyDoc.data).then((result) => {
        this.snackBar.open(' 操作成功', '', { duration: 2000 }).afterDismissed();
        this.ngOnInit();
      }).catch((err) => {

      });
    }
  }

}
