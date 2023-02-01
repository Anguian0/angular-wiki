import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pluck } from 'rxjs';

interface WikipediaResponse {
  query: {
    search: Article[];
  };
}

export interface Article {
  ns: number;
  title: string;
  pageid: number;
  size: number;
  wordcount: number;
  snippet: string;
  timestamp: Date;
}

@Injectable({ providedIn: 'root' })
export class SearchService {
  private url: string = 'https://es.wikipedia.org/w/api.php?';

  constructor(private readonly http: HttpClient) {}

  search(term: string): Observable<Article[]> {
    const params = {
      action: 'query',
      format: 'json',
      list: 'search',
      srsearch: term,
      utf8: '1',
      origin: '*',
    };
    
    return this.http.get<WikipediaResponse>(this.url, { params })
    .pipe(
      pluck('query', 'search'));
}
}
