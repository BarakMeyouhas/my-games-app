import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Layout/header/header.component';
import { MenuComponent } from './Layout/menu/menu.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { MainComponent } from './Layout/main/main.component';
import { CryptoListComponent } from './pages/crypto-list/crypto-list.component';
import { HttpClientModule } from '@angular/common/http';
import { GamesListComponent } from './pages/games-list/games-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    MainComponent,
    CryptoListComponent,
    GamesListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
