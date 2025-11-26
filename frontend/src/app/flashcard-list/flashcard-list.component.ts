import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Flashcard } from '../flashcard.model';
import { FlashcardCardComponent } from '../flashcard-card/flashcard-card.component';

@Component({
  selector: 'app-flashcard-list', // this is effectively your "Deck" for now
  standalone: true,
  imports: [CommonModule, FlashcardCardComponent],
  templateUrl: './flashcard-list.component.html',
  styleUrls: ['./flashcard-list.component.css'],
})
export class FlashcardListComponent {
  // This array is your deck
  flashcards: Flashcard[] = [
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
}
