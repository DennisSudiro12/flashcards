import { Component } from '@angular/core';
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
export class FlashcardDeckComponent {
  flashcards: Card[] = [
    {
      id: 1,
      question: 'What is Rust?',
      answer: 'A systems programming language focused on safety and performance.',
      showAnswer: false,
    },
    {
      id: 2,
      question: 'What is Angular?',
      answer: 'A frontend framework for building single-page applications with TypeScript.',
      showAnswer: false,
    },
    {
      id: 3,
      question: 'What is TypeScript?',
      answer: 'A superset of JavaScript that adds static typing.',
      showAnswer: false,
    },
  ];

  currentIndex = 0;

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
