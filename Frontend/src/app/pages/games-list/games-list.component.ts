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
    this.loadAllGames();
  }

  loadAllGames(): void {
    this.gamesService.getAllGames().subscribe((games) => {
      this.gamesData = [...this.gamesData, ...games.results];
      localStorage.setItem(
        this.localStorageKey,
        JSON.stringify(this.gamesData)
      );

      console.log(this.gamesData);
    });
  }

  loadGames(): void {
    console.log('Making an API call to get Games');
    this.gamesService.get20Games(this.page).subscribe((results) => {
      this.gamesData = [...this.gamesData, ...results.results];
      this.page++;

      localStorage.setItem(
        this.localStorageKey,
        JSON.stringify(this.gamesData)
      );

      console.log(this.gamesData);
    });
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
      console.log(
        'Game Details from local storage:',
        JSON.parse(storedDetails)
      );
      this.router.navigate(['/gameDetails', gameId]);
    } else {
      this.gamesService
        .getGameDetails(gameId.toString())
        .subscribe((details) => {
          console.log('Game Details from API:', details);
          localStorage.setItem(localStorageKey, JSON.stringify(details));
          this.router.navigate(['/gameDetails', gameId]);
        });
    }
  }
}
