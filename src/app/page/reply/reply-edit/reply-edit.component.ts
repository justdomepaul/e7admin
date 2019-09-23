import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReplyService } from 'src/app/service/reply/reply.service';

@Component({
  selector: 'app-reply-edit',
  templateUrl: './reply-edit.component.html',
  styleUrls: ['./reply-edit.component.scss']
})
export class ReplyEditComponent implements OnInit {
  reply;
  constructor(
    private route: ActivatedRoute,
    private replyService: ReplyService,
  ) { }

  ngOnInit() {
    console.log('params', this.route.snapshot.params.replyId);
    const replyId = this.route.snapshot.params.replyId;
    this.reply = this.replyService.replyGetById(replyId);
    // this.replyService.replyGetById(replyId).subscribe(
    //   (v) => {
    //     console.log('v', v);
    //     this.reply = v;
    //   },
    // );
  }

}
