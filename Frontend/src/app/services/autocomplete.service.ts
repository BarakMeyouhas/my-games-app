import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AutocompleteService {
  private APIKEY = 'c1cff7ce8544427797e07592e1e53079';
  private autocompleteURL = 'http://localhost:4000/api/v1/games/searchGames';

  constructor(private http: HttpClient) {}

  getAutocompleteResults(input$: Observable<string>): Observable<any> {
    return input$.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((input) => this.fetchAutocompleteResults(input))
    );
  }

  private fetchAutocompleteResults(input: string): Observable<any> {
    const url = `${this.autocompleteURL}/${input}?key=${this.APIKEY}`;
    return this.http.get(url);
  }
}