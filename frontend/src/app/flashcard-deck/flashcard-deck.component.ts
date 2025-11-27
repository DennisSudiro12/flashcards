import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '../flashcard.model';
import { FlashcardCardComponent } from '../flashcard-card/flashcard-card.component';

@Component({
  selector: 'app-flashcard-deck',
  standalone: true,
  imports: [CommonModule, FlashcardCardComponent],
  templateUrl: './flashcard-deck.component.html',
  styleUrls: ['./flashcard-deck.component.css'],
})
export class FlashcardDeckComponent implements OnChanges {
  @Input() cards: Card[] | null = null;

  // default sample; overwritten when [cards] is provided
  flashcards: Card[] = [];

  currentIndex = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['cards']) {
      const incoming = this.cards ?? [];
      this.flashcards = incoming.length ? incoming : this.flashcards;
      this.currentIndex = 0;
      if (this.flashcards[0]) {
        this.flashcards = this.flashcards.map(card => ({ ...card, showAnswer: false }));
      }
    }
  }

  next(): void {
    if (!this.flashcards.length) return;
    this.flashcards[this.currentIndex].showAnswer = false;
    this.currentIndex = (this.currentIndex + 1) % this.flashcards.length;
  }

  previous(): void {
    if (!this.flashcards.length) return;
    this.flashcards[this.currentIndex].showAnswer = false;
    this.currentIndex =
      (this.currentIndex - 1 + this.flashcards.length) % this.flashcards.length;
  }

  depth(idx: number): number {
    return (idx - this.currentIndex + this.flashcards.length) % this.flashcards.length;
  }
}
