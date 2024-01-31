import { Router } from '@angular/router';
import { GamesService } from './services/games.service';
import { Component } from '@angular/core';
import { AutocompleteService } from './services/autocomplete.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environments';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-games-app';
  showFiller = true;
  searchValue = '';
  genres: any[] = [];
  autocompleteSuggestions: any[] = [];
  isInputEmpty: boolean = false;

  public searchResultsArray: any = [];
  constructor(
    private autocompleteService: AutocompleteService,
    private GamesService: GamesService,
    private router: Router,
    private http: HttpClient
  ) {
    this.GamesService.setSearchResults(this.searchResultsArray);
  }

  onSearchInput(): void {
    const input$ = new Observable<string>((observer) => {
      observer.next(this.searchValue);
    });

    if (this.searchValue.trim() === '') {
      // If search value is empty, hide autocomplete suggestions
      this.autocompleteSuggestions = [];
    } else {
      // Fetch autocomplete suggestions if search value is not empty
      this.autocompleteService
        .getAutocompleteResults(input$)
        .subscribe((suggestions) => {
          this.autocompleteSuggestions = suggestions.results.slice(0, 10);
        });
    }
  }

  searchGame() {
    this.GamesService.searchGames(this.searchValue).subscribe(
      (searchResults) => {
        this.searchResultsArray = searchResults.results;
        console.log('Search results:', this.searchResultsArray);

        // Set search results in GamesService
        this.GamesService.setSearchResults(this.searchResultsArray);
      }
    );
  }

  toggleDrawer(): void {
    this.showFiller = !this.showFiller;
  }
  navigateToHome(): void {
    this.router.navigate(['/']);
  }
  private APIKEY = environment.API_KEY;

  logGenres(): void {
    const genresURL = `https://api.rawg.io/api/genres?key=${this.APIKEY}`;

    this.http.get(genresURL).subscribe((response: any) => {
      this.genres = response.results; // Assuming 'results' is an array in the response
      console.log('Genres:', this.genres);
    });
  }
}
