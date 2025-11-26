import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Flashcard } from '../flashcard.model';

@Component({
  selector: 'app-flashcard-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flashcard-card.component.html',
  styleUrls: ['./flashcard-card.component.css'],
})
export class FlashcardCardComponent {
  @Input({ required: true }) card!: Flashcard;

  toggleAnswer(): void {
    this.card.showAnswer = !this.card.showAnswer;
  }
}
