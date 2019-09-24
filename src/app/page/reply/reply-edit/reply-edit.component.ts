import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReplyService } from 'src/app/service/reply/reply.service';
import { MatSelectChange } from '@angular/material';

@Component({
  selector: 'app-reply-edit',
  templateUrl: './reply-edit.component.html',
  styleUrls: ['./reply-edit.component.scss']
})
export class ReplyEditComponent implements OnInit {
  replyTypes = [
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
  reply;
  replyId;
  constructor(
    private route: ActivatedRoute,
    private replyService: ReplyService,
  ) { }

  ngOnInit() {
    console.log('params', this.route.snapshot.params.replyId);
    this.replyId = this.route.snapshot.params.replyId;
    // this.reply = this.replyService.replyGetById(replyId);
    this.replyService.replyGetById(this.replyId).subscribe(
      (v) => {
        console.log('v', v);
        this.reply = v;
      },
    );
  }

  update() {
    const reply = this.reply;
    if (reply.template.type === 'template' && reply.template.template.title === '') {
      delete reply.template.template.title;
    }
    this.replyService.replyUpdateById(this.replyId, reply);
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
