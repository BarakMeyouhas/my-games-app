import { AutocompleteComponent } from './features/autocomplete/autocomplete.component';
import { GamesService } from './services/games.service';
import { Component } from '@angular/core';
import { AutocompleteService } from './services/autocomplete.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-games-app';
  showFiller = true;
  searchValue = '';

  autocompleteSuggestions: any[] = [];
  isInputEmpty: boolean = false;

  public searchResultsArray: any = [];

  constructor(
    private autocompleteService: AutocompleteService,
    private GamesService: GamesService
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
          this.autocompleteSuggestions = suggestions.results.slice(0, 4);
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
}
