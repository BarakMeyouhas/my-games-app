// games-list.component.ts

import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss'],
})
export class GamesListComponent implements OnInit {
  gamesData: any[] = [];
  showEffect: boolean = false;
  page: number = 1; // Initial page

  constructor(private gamesService: GamesService) {}

  ngOnInit(): void {
    this.loadGames();
  }

  loadGames(): void {
    this.gamesService.getAllGames(this.page).subscribe((results) => {
      this.gamesData = [...this.gamesData, ...results.results];
      this.page++;
    });
  }

  loadMoreGames(): void {
    this.page++;
    this.loadGames();
  }

  loadGameDetails(gameId: string): void {
    this.gamesService.getGameDetails(gameId).subscribe((details) => {
      console.log('Game Details:', details);
    });
  }
}
