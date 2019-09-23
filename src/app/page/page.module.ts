import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { ReplyListComponent } from './reply/reply-list/reply-list.component';
import { ReplyAddComponent } from './reply/reply-add/reply-add.component';
import { MaterialModule } from '../module/material/material.module';

@NgModule({
  declarations: [ReplyListComponent, ReplyAddComponent],
  imports: [
    CommonModule,
    PageRoutingModule,
    MaterialModule,
  ]
})
export class PageModule { }
