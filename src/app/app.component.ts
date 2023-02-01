import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Article, SearchService } from './pages/search/service/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-prueba';

  articles$!: Observable<Article[]>;
  constructor(private readonly searchSvc: SearchService) {}

  onSearch(term: string): void {
    this.articles$ = this.searchSvc.search(term);
  }
}
