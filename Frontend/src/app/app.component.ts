import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-games-app';
  showFiller = true;

  searchValue = '';

  searchGame() {
    console.log('Search value on icon click:', this.searchValue);
  }

  toggleDrawer(): void {
    this.showFiller = !this.showFiller;
  }
}
