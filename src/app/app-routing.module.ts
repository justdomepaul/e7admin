import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './layout/login/login.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { ReplyListComponent } from './page/reply/reply-list/reply-list.component';
import { LoginGuard } from './guard/login/login.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', component: LayoutComponent, canActivate: [LoginGuard], children: [
      { path: 'replyList', component: ReplyListComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
