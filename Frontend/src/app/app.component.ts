import { Component } from '@angular/core';

type CardContent = {
  title: string;
  description: string;
  imageUrl: string;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-games-app';
  showFiller = true;

  searchValue: string = '';

  onKeyUp(event: KeyboardEvent): void {
    console.log('Search value on keyup:', this.searchValue);
  }

  searchGame(): void {
    console.log('Search value on icon click:', this.searchValue);
  }

  toggleDrawer(): void {
    this.showFiller = !this.showFiller;
  }
}
