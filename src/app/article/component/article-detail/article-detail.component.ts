import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../services/article-service.service';
import { Component, Input , Output, EventEmitter } from '@angular/core';
import { Article,  ArticleQuantityChange  } from '../../models/article.model';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrl: './article-detail.component.css'
})
export class ArticleDetailComponent {

  articleId: string | null = '';
  article: any = null;


    @Output() articleQuantityChange = new EventEmitter<ArticleQuantityChange>();
    @Output() addArticle = new EventEmitter<ArticleQuantityChange>();
    @Output() removeArticle = new EventEmitter<ArticleQuantityChange>();

  constructor(private route: ActivatedRoute, private articleService: ArticleService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.articleId = params.get('id');
      if (this.articleId) {
        this.articleService.getDetailArticle(this.articleId).subscribe(articleDetail => {
          this.article = articleDetail;
        });
      }
    });
  }

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

}
