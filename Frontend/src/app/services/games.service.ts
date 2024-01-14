import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  data: any = '';
  gamesURL = 'http://localhost:4000/api/v1/games/allGames';

  constructor(private http: HttpClient) {}
  makeApiRequest() {
    return this.http.get(this.gamesURL);
  }
}
