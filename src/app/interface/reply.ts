import { Message } from './line-bot-message';

export interface Reply {
  keyword: string;
  allowUsers: string[];
  template: Message | any;
  status: 0 | 1; // 0刪除 1正常
}

export interface ReplyDoc {
  id: string;
  data: Reply;
}
