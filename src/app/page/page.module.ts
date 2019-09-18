import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { ReplyListComponent } from './reply/reply-list/reply-list.component';

@NgModule({
  declarations: [ReplyListComponent],
  imports: [
    CommonModule,
    PageRoutingModule
  ]
})
export class PageModule { }
