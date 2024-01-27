import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  private APIKEY = 'c1cff7ce8544427797e07592e1e53079';
  private gamesURL = `https://api.rawg.io/api/games?key=${this.APIKEY}&dates=2018-01-01,2018-12-31&ordering=-added&page=`;
  private gameDetailsURL = 'https://api.rawg.io/api/games';
  private allGamesURL = `https://api.rawg.io/api/games?key=${this.APIKEY}`;
  private searchGamesURL = 'http://localhost:4000/api/v1/games/searchGames';
  
  
  private searchResults : any = [];


  
  private searchResultsSubject = new Subject<any>();
  searchResults$ = this.searchResultsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.searchResults$ = this.searchResultsSubject.asObservable();
  }

  setSearchResults(searchResults: any): void {
    this.searchResultsSubject.next(searchResults);
  }

  getAllGames(): Observable<any> {
    return this.http.get(`${this.allGamesURL}`);
  }

  get20Games(page: number): Observable<any> {
    return this.http.get(`${this.gamesURL}${page}`);
  }

  getGameDetails(gameId: string): Observable<any> {
    return this.http.get(`${this.gameDetailsURL}/${gameId}?key=${this.APIKEY}`);
  }

  searchGames(gameName: string): Observable<any> {
    const url = `${this.searchGamesURL}/${gameName}?key=${this.APIKEY}`;
    return this.http.get(url);
  }
}
