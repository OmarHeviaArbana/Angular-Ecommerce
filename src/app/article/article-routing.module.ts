import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './component/article-list/article-list.component';
import { ArticleDetailComponent } from './component/article-detail/article-detail.component';
import { ArticleNewReactiveComponent } from './component/article-new-reactive/article-new-reactive.component';
import { AuthGuard } from '../shared/guards/auth.guard';

const routes: Routes = [
  { path: 'article/list', component: ArticleListComponent },
  { path: 'article/:id', component: ArticleDetailComponent },
  { path: 'auth/article/create', component: ArticleNewReactiveComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
