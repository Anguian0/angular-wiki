import { Component, Input } from '@angular/core';
import { Article } from '../search/service/search.service';

@Component({
  selector: 'app-article',
  template: ` <article class="bg-white rounded-xl p-4 border-2 border-black my-3">
    <a class="text-xl font-medium hover:text-blue-600" [href]="'https://es.wikipedia.org/wiki/' + article.title "target="_blank">
      {{ article.title }}
    </a>
    <p [innerHTML]="article.snippet"></p>
  </article>`,
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent {
  @Input() article!: Article;
}
