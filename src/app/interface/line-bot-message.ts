export interface Message {
  zh: string;
  type: string;
  template: TextMessage | TemplateMessage;
}

export interface TextMessage {
  type: 'text';
  text: string;
}

export interface TemplateMessage {
  type: 'template';
  altText: string;
  template: TemplateContent;
}

export type TemplateContent = | TemplateButtons;

export interface TemplateButtons {
  type: 'buttons';
  thumbnailImageUrl?: string;
  imageAspectRatio?: 'rectangle' | 'square';
  imageSize?: 'cover' | 'contain';
  imageBackgroundColor?: string;
  title?: string;
  text: string;
  actions: Action[];
}

export type Action<ExtraFields = { label: string }> = (
  | MessageAction
  | URIAction) &
  ExtraFields;

export interface MessageAction {
  type: 'message';
  text: string;
}

export interface URIAction {
  type: 'uri';
  uri: string;
}
