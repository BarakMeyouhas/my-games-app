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

  toggleDrawer(): void {
    this.showFiller = !this.showFiller;
  }
}
