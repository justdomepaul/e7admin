export interface TemplateMessage {
  type: 'template';
  /**
   * Alternative text (Max: 400 characters)
   */
  altText: string;
  /**
   * Carousel template content
   */
  template: TemplateContent;
}

export type TemplateContent = | TemplateButtons;


export interface TemplateButtons {
  type: 'buttons';
  /**
   * Image URL (Max: 1000 characters)
   *
   * - HTTPS
   * - JPEG or PNG
   * - Max width: 1024px
   * - Max: 1 MB
   */
  thumbnailImageUrl?: string;
  /**
   * Aspect ratio of the image. Specify one of the following values:
   *
   * - `rectangle`: 1.51:1
   * - `square`: 1:1
   *
   * The default value is `rectangle`
   */
  imageAspectRatio?: 'rectangle' | 'square';
  /**
   * Size of the image. Specify one of the following values:
   *
   * - `cover`: The image fills the entire image area. Parts of the image that
   *   do not fit in the area are not displayed.
   * - `contain`: The entire image is displayed in the image area. A background
   *   is displayed in the unused areas to the left and right of vertical images
   *   and in the areas above and below horizontal images.
   *
   * The default value is `cover`.
   */
  imageSize?: 'cover' | 'contain';
  /**
   * Background color of image. Specify a RGB color value.
   * The default value is `#FFFFFF` (white).
   */
  imageBackgroundColor?: string;
  /**
   * Title (Max: 40 characters)
   */
  title?: string;
  /**
   * Message text
   *
   * - Max: 160 characters (no image or title)
   * - Max: 60 characters (message with an image or title)
   */
  text: string;
  /**
   * Action when tapped (Max: 4)
   */
  actions: Action[];
}

export type Action =
  | MessageAction
  | URIAction;

export interface MessageAction {
  type: 'message';
  /**
   * Text sent when the action is performed (Max: 300 characters)
   */
  text: string;
}

/**
 * When a control associated with this action is tapped, the URI specified in
 * the `uri` property is opened.
 */
export interface URIAction {
  type: 'uri';
  /**
   * URI opened when the action is performed (Max: 1000 characters).
   * Must start with `http`, `https`, or `tel`.
   */
  uri: string;
}
