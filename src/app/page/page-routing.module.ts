import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReplyListComponent } from './reply/reply-list/reply-list.component';
import { ReplyAddComponent } from './reply/reply-add/reply-add.component';

const routes: Routes = [
  { path: 'replyList', component: ReplyListComponent },
  { path: 'replyList/add', component: ReplyAddComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
