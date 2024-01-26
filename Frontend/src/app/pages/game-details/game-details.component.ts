import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../../services/games.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss'],
})
export class GameDetailsComponent implements OnInit {
  gameId: any;
  gameDetails: any;
  chart: any = [];
  pieChartLabels: any = [];

  slides: any[] = new Array(3).fill({
    id: -1,
    src: '',
    title: '',
    subtitle: '',
  });

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

    var labels = this.gameDetails.ratings.map((rating: any) => {
      return rating.title;
    });

    var data =  this.gameDetails.ratings.map((rating: any) => {
      return rating.count;
    });

    if (this.gameDetails) {

      this.chart = new Chart('chart', {
        type: 'doughnut',
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Game Ratings',
              data: data,
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'red'
              ],
              hoverOffset: 4,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }

  }

  redirectToStore(domain: string): void {
    window.open('http://' + domain, '_blank');
  }
}
