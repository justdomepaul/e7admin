import { Component, OnInit } from '@angular/core';
import { ReplyService } from 'src/app/service/reply/reply.service';

@Component({
  selector: 'app-reply-list',
  templateUrl: './reply-list.component.html',
  styleUrls: ['./reply-list.component.scss']
})
export class ReplyListComponent implements OnInit {

  constructor(
    public replyService: ReplyService,
  ) { }

  ngOnInit() {
    this.replyService.replyGetList().subscribe(
      (v) => {
        const data = v.data();
        console.log(data);
      },
    );
    this.replyService.replyWhere().subscribe(
      (v) => {
        v.forEach(ele => {
          console.log(ele.id, '=>', ele.data());
        });
      },
    );
  }

}
