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

  constructor(
    private gamesService: GamesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadGames();
  }

  loadGames(): void {
    this.gamesService.getAllGames(this.page).subscribe((results) => {
      this.gamesData = [...this.gamesData, ...results.results];
      this.page++;
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
    // Navigate to the 'gameDetails' route with the game ID as a parameter
    this.router.navigate(['/gameDetails', gameId]);
  }
}
