import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autocomplete',
  template: `
    <div class="autocomplete-box">
      <ul *ngIf="suggestions.length > 0 && !isInputEmpty">
        <li
          *ngFor="let suggestion of suggestions"
          (click)="selectSuggestion(suggestion)"
        >
          <img
            class="game-image"
            [src]="suggestion.background_image"
            alt="Game Image"
          />
          {{ suggestion.name }}
        </li>
      </ul>
    </div>
  `,
  styles: [
    `
      @import url('https://fonts.googleapis.com/css2?family=Alata&display=swap');
      ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
        border-radius: 5px;
        width: 30%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1;
        background-color: black;
      }

      li {
        padding: 8px;
        cursor: pointer;
        font-family: 'Alata', sans-serif;
        letter-spacing: 1px;
        display: flex;
        align-items: center;
      }
      .game-image {
        width: 60px;
        height: 40px;
        margin-right: 8px;
        border-radius: 6px;
      }

      li:hover {
        background-color: #1f2122;
      }
      @media (max-width: 2561px) {
        ul {
          margin-left: 2270px;
          width: 279px;
        }
      }

      @media (max-width: 1441px) and (min-width: 1026px) {
        ul {
          margin-left: 1152px;
          width: auto;
        }
      }
      @media (min-width: 1268px) {
        ul {
          margin-left: 850px;
          width: auto;
        }
      }
      @media (max-width: 1025px) and (min-width: 769px) {
        ul {
          margin-left: 728px;
          width: auto;
        }
      }

      @media (min-width: 427px) and (max-width: 768px) {
        ul {
          margin-left: 440px;
          width: auto;
        }
      }
      @media (max-width: 426px) and (min-width: 376px) {
        ul {
          margin-left: 0px;
          width: auto;
        }
      }
      @media (max-width: 376px) and (min-width: 321px) {
        ul {
          margin-left: 0px;
          width: auto;
        }
      }
      @media (max-width: 321px) and (min-width: 320px) {
        ul {
          margin-left: 0px;
          width: auto;
        }
      }
    `,
  ],
})
export class AutocompleteComponent {
  @Input() suggestions: any[] = [];
  @Input() isInputEmpty: boolean = false;

  constructor(private router: Router) {}

  selectSuggestion(suggestion: any): void {
    console.log('Selected suggestion:', suggestion);

    // Check if suggestion has an id and navigate to game details
    if (suggestion.id) {
      this.router.navigate(['/gameDetails', suggestion.id]);
    }
  }
}
