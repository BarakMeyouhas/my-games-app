import { ActivatedRoute } from '@angular/router';
import { GamesService } from './services/games.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], // Fix typo in styleUrls
})
export class AppComponent {
  title = 'my-games-app';
  showFiller = true;
  searchValue = '';
  searchResultsArray = [];

  constructor(
    private route: ActivatedRoute,
    private gamesService: GamesService
  ) {}

  searchGame() {
    this.gamesService
      .searchGames(this.searchValue)
      .subscribe((searchResults) => {
        console.log('Search results:', searchResults.results);
        this.searchResultsArray = searchResults.results;
      });
  }

  toggleDrawer(): void {
    this.showFiller = !this.showFiller;
  }
}
