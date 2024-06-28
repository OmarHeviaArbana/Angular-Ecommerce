import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: '', redirectTo:'/login', pathMatch: 'full' },
  { path: 'auth',loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'article', loadChildren: () => import('./article/article.module').then(m => m.ArticleModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
