import { Component, OnInit, HostBinding } from '@angular/core';
import { Article } from './article.module';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit { @HostBinding('attr.class') cssClass = 'row'; article: Article;
constructor() {
this.article = new Article(
      'Angular 2',
      'http://angular.io',
      10);
}
voteUp(): boolean {
  this.article.votes += 1; return false;
}
voteDown(): boolean {
  this.article.votes -= 1; return false;
}
  ngOnInit() {
  }
}
