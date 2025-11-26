import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Flashcard } from '../flashcard.model';

@Component({
  selector: 'app-flashcard-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flashcard-list.component.html',
  styleUrls: ['./flashcard-list.component.css'],
})
export class FlashcardListComponent {
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

  toggleAnswer(card: Flashcard): void {
    card.showAnswer = !card.showAnswer;
  }
}
