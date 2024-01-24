import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  private APIKEY = 'c1cff7ce8544427797e07592e1e53079';
  private gamesURL = `https://api.rawg.io/api/games?key=${this.APIKEY}&dates=2018-01-01,2018-12-31&ordering=-added&page=`;
  private gameDetailsURL = 'https://api.rawg.io/api/games';
  //for all the games
  private allGamesURL = `https://api.rawg.io/api/games?key=${this.APIKEY}`;

  constructor(private http: HttpClient) {}

  getAllGames(): Observable<any> {
    return this.http.get(`${this.allGamesURL}`);
  }

  get20Games(page: number): Observable<any> {
    return this.http.get(`${this.gamesURL}${page}`);
  }

  getGameDetails(gameId: string): Observable<any> {
    return this.http.get(`${this.gameDetailsURL}/${gameId}?key=${this.APIKEY}`);
  }
}
