import { ActivatedRoute } from '@angular/router';
import { GamesService } from './services/games.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-games-app';
  showFiller = true;
  searchValue = '';
  public searchResultsArray: any = [];

  constructor(
    private route: ActivatedRoute,
    private gamesService: GamesService
  ) {
    this.gamesService.setSearchResults(this.searchResultsArray);
  }

  searchGame() {
    this.gamesService
      .searchGames(this.searchValue)
      .subscribe((searchResults) => {
        this.searchResultsArray = searchResults.results;
        console.log('Search results:', this.searchResultsArray);

        // Set search results in GamesService
        this.gamesService.setSearchResults(this.searchResultsArray);
      });
  }

  toggleDrawer(): void {
    this.showFiller = !this.showFiller;
  }
}
