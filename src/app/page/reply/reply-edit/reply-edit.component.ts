import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReplyService } from 'src/app/service/reply/reply.service';
import { MatSelectChange, MatSnackBar } from '@angular/material';
import { MessageE7 } from 'src/app/interface/line-bot-message';
import { Reply } from 'src/app/interface/reply';

@Component({
  selector: 'app-reply-edit',
  templateUrl: './reply-edit.component.html',
  styleUrls: ['./reply-edit.component.scss']
})
export class ReplyEditComponent implements OnInit {
  reply: Reply;

  replyTypes: MessageE7[] = [
    {
      type: 'text', zh: '文字回覆', template: { type: 'text', text: '' }
    },
    {
      type: 'template', zh: '樣式按鈕', template: {
        type: 'template',
        altText: '你有新訊息',
        template: {
          type: 'buttons',
          text: '',
          title: '',
          thumbnailImageUrl: '',
          imageAspectRatio: 'rectangle',
          imageSize: 'contain',
          imageBackgroundColor: '#a8e8fb',
          actions: [
            {
              type: 'uri',
              label: '範例',
              uri: 'https://www.google.com.tw/'
            },
          ]
        },
      },
    }
  ];
  replyId;
  constructor(
    private route: ActivatedRoute,
    private replyService: ReplyService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    console.log('params', this.route.snapshot.params.replyId);
    this.replyId = this.route.snapshot.params.replyId;
    // this.reply = this.replyService.replyGetById(replyId);
    this.replyService.replyGetById(this.replyId).subscribe(
      (v: Reply) => {
        console.log('v', v);
        this.reply = v;
      },
    );
  }

  update() {
    const reply: Reply = this.reply;
    if (reply.template.type === 'template') {
      if (reply.template.template.title === '') {
        delete reply.template.template.title;
      }
      if (reply.template.template.thumbnailImageUrl === '') {
        delete reply.template.template.thumbnailImageUrl;
      }
    }
    this.replyService.replyUpdateById(this.replyId, reply).then((result) => {
      this.snackBar.open(' 更新成功', '', { duration: 2000 }).afterDismissed();
    }).catch((err) => {

    });
  }

  changeTemplate(event: MatSelectChange) {
    console.log('event', event.value);
    this.replyTypes.forEach(replyType => {
      if (event.value === replyType.type) {
        this.reply.template = replyType.template;
      }
    });
  }

}
