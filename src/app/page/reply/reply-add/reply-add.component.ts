import { Component, OnInit } from '@angular/core';
import { TemplateMessage } from 'src/app/interface/line-bot-message';

@Component({
  selector: 'app-reply-add',
  templateUrl: './reply-add.component.html',
  styleUrls: ['./reply-add.component.scss']
})
export class ReplyAddComponent implements OnInit {
  messageTemplates = [
    {
      type: 'Text message',
      structure: {
        type: 'text',
        text: '',
      }
    },
    {
      type: 'Image message',
      structure: {
        type: 'image',
        originalContentUrl: '',
        previewImageUrl: '',
      }
    },
    {
      type: '樣板訊息-按鈕',
      structure: {
        type: 'template',
        altText: '你有新訊息',
        template: {
          type: 'buttons',
          title: '',
          text: '',
          actions: [],
        },
      }
    },
  ];
  message;

  templateMessage: TemplateMessage = {
    altText: '',
    type: 'template',
    template: {
      type: 'buttons',
      actions: [],
      text: '',
    },

  };
  constructor() { }

  ngOnInit() {
  }

}
