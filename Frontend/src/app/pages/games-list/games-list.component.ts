import { Component } from '@angular/core';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrl: './games-list.component.scss',
})
export class GamesListComponent {
  gamesData: any = '';
  constructor(private GamesService: GamesService) {}

  ngOnInit(): void {
    //get a data from api request
    this.GamesService.makeApiRequest().subscribe((data) => {
      console.log(data);
      this.gamesData = data;
    });
  }
}
