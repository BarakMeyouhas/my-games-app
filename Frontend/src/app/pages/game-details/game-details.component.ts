import { GamesService } from '../../services/games.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import Chart from 'chart.js/auto';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss'],
})
export class GameDetailsComponent implements OnInit {
  slides: any[] = [];

  gameId: any;
  gameDetails: any;
  chart: any = [];
  pieChartLabels: any = [];

  constructor(
    private route: ActivatedRoute,
    private GamesService: GamesService
  ) {}

  ngOnInit(): void {
    
    // Subscribe to route changes
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          // Extract the 'id' parameter from the route
          this.gameId = params.get('id');
          // Fetch game details based on the new 'id'
          return this.GamesService.getGameDetails(this.gameId);
          
        })
        
      )
      .subscribe((details) => {
        this.gameDetails = details;

        var labels = this.gameDetails.ratings.map((rating: any) => {
          return rating.title;
        });

        var data = this.gameDetails.ratings.map((rating: any) => {
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
                    'red',
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

        // Now that we have gameDetails, fetch additional details by name
        this.fetchAdditionalDetailsByName(this.gameDetails.slug);
      });
  }

  fetchAdditionalDetailsByName(gameName: string): void {
    this.GamesService.searchGames(gameName).subscribe((searchResults) => {
      var screenshotsArray = searchResults.results[0].short_screenshots;
      var filteredScreenshots = screenshotsArray.filter(
        (screenshot: any) => screenshot.id >= 0
      );
      this.slides = filteredScreenshots;

      console.log(this.slides);
    });
  }

  redirectToStore(domain: string): void {
    window.open('http://' + domain, '_blank');
  }
}
