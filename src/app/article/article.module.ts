import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ArticleItemComponent } from './component/article-item/article-item.component';
import { ArticleNewReactiveComponent } from './component/article-new-reactive/article-new-reactive.component';
import { ArticleListComponent } from './component/article-list/article-list.component';
import { ArticleDetailComponent } from './component/article-detail/article-detail.component';
import { PriceArticleFormat } from './pipes/price-article-format.pipe';
import { DefaultImageArticle } from './pipes/default-image-article.pipe';
import { ArticleService } from './services/article-service.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ArticleItemComponent,
    ArticleNewReactiveComponent,
    ArticleListComponent,
    ArticleDetailComponent,
    PriceArticleFormat,
    DefaultImageArticle
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [
    ArticleService
  ]
})
export class ArticleModule { }
