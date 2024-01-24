import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../../services/games.service';
// import {Chart} from 'chart.js/auto'


@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss'],
})
export class GameDetailsComponent implements OnInit {
  gameId: any;
  gameDetails: any;

  constructor(
    private route: ActivatedRoute,
    private gamesService: GamesService
  ) {}

  ngOnInit(): void {
    this.gameId = this.route.snapshot.paramMap.get('id');
    const localStorageKey = `gameDetails_${this.gameId}`;

    const storedDetails = localStorage.getItem(localStorageKey);

    if (storedDetails) {
      this.gameDetails = JSON.parse(storedDetails);
      console.log('Game Details from local storage:', this.gameDetails);
    } else {
      this.gamesService.getGameDetails(this.gameId).subscribe((details) => {
        this.gameDetails = details;
        console.log('Game Details from API:', this.gameDetails);

        localStorage.setItem(localStorageKey, JSON.stringify(this.gameDetails));
      });
    }
  }

  redirectToStore(domain: string): void {
    window.open('http://' + domain, '_blank');
  }
}
