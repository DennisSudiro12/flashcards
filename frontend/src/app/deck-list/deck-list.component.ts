import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FlashcardsService } from '../flashcard.service';
import { Deck } from '../flashcard.model';

@Component({
  selector: 'app-deck-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './deck-list.component.html'
})
export class DeckListComponent implements OnInit {
  decks: Deck[] = [];

  constructor(
    private flashcardsService: FlashcardsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.decks = this.flashcardsService.getDecks();
  }

  openDeck(deckId: number): void {
    this.router.navigate(['/decks', deckId]);
  }
}
