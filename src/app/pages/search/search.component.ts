import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounce, debounceTime, distinctUntilChanged, filter, map, tap } from 'rxjs';

@Component({
  selector: 'app-search',
  template: `
    <div>
      <form action="">
        <div class="flex justify-center items-stretch">
          <label for="" class="mr-1 self-center hidden md:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-12 h-12"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Buscar"
            class="border-2 border-black rounded-xl w-72 h-10 p-3 self-center"
            [formControl]="inputSearch"
          />
        </div>
      </form>
    </div>
  `,

  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  inputSearch = new FormControl('');
  @Output() submitted = new EventEmitter<any>();

  constructor() {

  }

  ngOnInit(): void {
    this.onChange();
  }

  onChange(): void {
    this.inputSearch.valueChanges
      .pipe(
        map((search: string|any) => search.trim()),
        debounceTime(300),
        distinctUntilChanged(),
        filter((search: string) => search !== ''),
        tap((search: string) => this.submitted.emit(search))
        )
      .subscribe();
      // this.inputSearch.valueChanges
      // .pipe(
      //   tap(res => this.submitted.emit(res))
      //   )
      // .subscribe();
  }
}
