import { Injectable } from '@angular/core';
import { Deck } from './flashcard.model';

@Injectable({
  providedIn: 'root'
})
export class FlashcardsService {

  // For now: hardcoded decks + cards
  private decks: Deck[] = [
    {
      id: 1,
      name: 'Rust Basics',
      description: 'Ownership, borrowing, lifetimes',
      cards: [
        { id: 1, question: 'What is ownership?', answer: 'A set of rules that govern how a Rust program manages memory.', showAnswer: false },
        { id: 2, question: 'What is borrowing?', answer: 'Accessing data without taking ownership via references.', showAnswer: false }
      ]
    },
    {
      id: 2,
      name: 'HTTP Basics',
      description: 'Requests, responses, methods',
      cards: [
        { id: 3, question: 'What does HTTP stand for?', answer: 'HyperText Transfer Protocol.', showAnswer: false },
        { id: 4, question: 'Name 3 HTTP methods', answer: 'GET, POST, PUT, DELETE, ...', showAnswer: false }
      ]
    }
  ];

  constructor() {}

  getDecks(): Deck[] {
    return this.decks;
  }

  getDeckById(id: number): Deck | undefined {
    return this.decks.find(d => d.id === id);
  }
}
