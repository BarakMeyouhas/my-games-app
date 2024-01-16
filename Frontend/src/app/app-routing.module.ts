import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesListComponent } from './pages/games-list/games-list.component';
import { GameDetailsComponent } from './pages/game-details/game-details.component';

const routes: Routes = 
  [
    { path: '', component: GamesListComponent },
    { path: 'gameDetails/:id', component: GameDetailsComponent },

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
