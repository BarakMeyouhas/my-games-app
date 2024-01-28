import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-autocomplete',
  template: `
    <div class="autocomplete-box">
      <ul *ngIf="suggestions.length > 0 && !isInputEmpty">
        <li
          *ngFor="let suggestion of suggestions"
          (click)="selectSuggestion(suggestion)"
        >
          {{ suggestion.name }}
        </li>
      </ul>
    </div>
  `,
  styles: [
    `
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
          margin-left: 983px;
          width: 249px;
        }
      }
      @media (max-width: 115px) and (min-width: 1268px) {
        ul {
          margin-left: 750px;
          width: 270px;
        }
      }
      @media (max-width: 1025px) and (min-width: 769px) {
        ul {
          margin-left: 749px;
          width: 270px;
        }
      }

      @media (min-width: 427px) and (max-width: 768px) {
        ul {
          margin-left: 520px;
        }
      }
      @media (max-width: 426px) and (min-width: 376px) {
        ul {
          margin-left: 255px;
        }
      }
      @media (max-width: 376px) and (min-width: 321px) {
        ul {
          margin-left: 213px;
        }
      }
      @media (max-width: 321px) and (min-width: 320px) {
        ul {
          margin-left: 170px;
        }
      }
    `,
  ],
})
export class AutocompleteComponent {
  @Input() suggestions: any[] = [];
  @Input() isInputEmpty: boolean = false;

  selectSuggestion(suggestion: any): void {
    console.log('Selected suggestion:', suggestion);
  }
}
