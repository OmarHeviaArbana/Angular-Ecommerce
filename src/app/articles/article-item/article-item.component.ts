import { Component, Input , Output, EventEmitter } from '@angular/core';
import { Article,  ArticleQuantityChange  } from './../../models/article.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.css',
})

export class ArticleItemComponent {

  @Input() article = {} as  Article
  @Output() articleQuantityChange = new EventEmitter<ArticleQuantityChange>();
  @Output() addArticle = new EventEmitter<ArticleQuantityChange>();
  @Output() removeArticle = new EventEmitter<ArticleQuantityChange>();

  constructor(private router: Router) {}

  articleQuantity: number = 0;
      quantityChange(quantity: number): void {
        const quantityChange: ArticleQuantityChange = {
          article: this.article,
          quantity
        };
        this.articleQuantityChange.emit(quantityChange);

      }
      removeArticleUnit(quantity: number): void {
        const quantityChange: ArticleQuantityChange = {
          article: this.article,
          quantity
        };

        this.removeArticle.emit(quantityChange);
      }
      addArticleUnit(quantity: number): void {
        const quantityChange: ArticleQuantityChange = {
          article: this.article,
          quantity
        };

        this.addArticle.emit(quantityChange);
      }

      goToArticleDetail(): void {
        this.router.navigate(['/article', this.article.id]);
      }



}
