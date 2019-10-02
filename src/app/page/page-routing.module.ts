import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReplyListComponent } from './reply/reply-list/reply-list.component';
import { ReplyEditComponent } from './reply/reply-edit/reply-edit.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'replyList' },
  { path: 'replyList', component: ReplyListComponent },
  { path: 'replyList/edit/:replyId', component: ReplyEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
