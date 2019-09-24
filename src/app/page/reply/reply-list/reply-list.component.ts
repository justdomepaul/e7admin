import { Component, OnInit } from '@angular/core';
import { ReplyService } from 'src/app/service/reply/reply.service';
import { ModalService } from 'src/app/service/common/modal/modal.service';

@Component({
  selector: 'app-reply-list',
  templateUrl: './reply-list.component.html',
  styleUrls: ['./reply-list.component.scss']
})
export class ReplyListComponent implements OnInit {

  replyLists = [];
  constructor(
    public replyService: ReplyService,
    public modalService: ModalService,
  ) { }

  ngOnInit() {
    this.replyLists = [];
    this.replyService.replyWhere().subscribe(
      (v) => {
        console.log('vvvvv', v);
        v.forEach(ele => {
          this.replyLists.push(
            { id: ele.id, data: ele.data() },
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

}
