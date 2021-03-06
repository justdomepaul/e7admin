import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { ReplyListComponent } from './reply/reply-list/reply-list.component';
import { MaterialModule } from '../module/material/material.module';
import { ReplyEditComponent } from './reply/reply-edit/reply-edit.component';

@NgModule({
  declarations: [ReplyListComponent, ReplyEditComponent],
  imports: [
    CommonModule,
    PageRoutingModule,
    MaterialModule,
  ]
})
export class PageModule { }
