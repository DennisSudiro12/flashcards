import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashcardsService } from '../flashcard.service';
import { Deck } from '../flashcard.model';
import { FlashcardDeckComponent } from '../flashcard-deck/flashcard-deck.component';

@Component({
  selector: 'app-deck-detail',
  standalone: true,
  imports: [CommonModule, FlashcardDeckComponent],
  templateUrl: './deck-detail.component.html'
})
export class DeckDetailComponent implements OnInit {
  deck: Deck | undefined;

  constructor(
    private route: ActivatedRoute,
    protected router: Router,
    private flashcardsService: FlashcardsService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? Number(idParam) : NaN;

    if (!id || Number.isNaN(id)) {
      // invalid id
      this.router.navigate(['/']);
      return;
    }

    this.deck = this.flashcardsService.getDeckById(id);
    if (!this.deck) {
      // deck not found
      this.router.navigate(['/']);
    }
  }
}
