import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../services/games.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss'],
})
export class GamesListComponent implements OnInit {
  gamesData: any[] = [];
  showEffect: boolean = false;
  page: number = 1; // Initial page
  localStorageKey: string = 'allGames';

  constructor(private gamesService: GamesService, private router: Router) {}

  ngOnInit(): void {
    this.loadGames();
  }

  loadGames(): void {
    const storedGames = localStorage.getItem(this.localStorageKey);

    if (storedGames) {
      // Data exists in local storage, use it
      this.gamesData = JSON.parse(storedGames);
    } else {
      // Data not found in local storage, make API call
      this.gamesService.getAllGames(this.page).subscribe((results) => {
        this.gamesData = [...this.gamesData, ...results.results];
        this.page++;

        // Save data to local storage
        localStorage.setItem(
          this.localStorageKey,
          JSON.stringify(this.gamesData)
        );

        console.log(this.gamesData);
      });
    }
  }

  loadMoreGames(): void {
    this.page++;
    this.loadGames();
  }

  gameDetailsById(gameId: string): void {
    this.gamesService.getGameDetails(gameId).subscribe((details) => {
      console.log('Game Details:', details);
    });
  }

  navigateToGameDetails(gameId: number): void {
    const localStorageKey = `gameDetails_${gameId}`;
    const storedDetails = localStorage.getItem(localStorageKey);

    if (storedDetails) {
      // Details exist in local storage, use them
      console.log(
        'Game Details from local storage:',
        JSON.parse(storedDetails)
      );
      this.router.navigate(['/gameDetails', gameId]);
    } else {
      // Details not found in local storage, make API call
      this.gamesService
        .getGameDetails(gameId.toString())
        .subscribe((details) => {
          console.log('Game Details from API:', details);

          // Save details to local storage
          localStorage.setItem(localStorageKey, JSON.stringify(details));

          // Navigate to the game details page
          this.router.navigate(['/gameDetails', gameId]);
        });
    }
  }
}
