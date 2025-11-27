import { Component, inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FlashcardDeckComponent } from './flashcard-deck/flashcard-deck.component';


@Component({
  selector: 'app-root',
  imports: [FlashcardDeckComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
  protected readonly isDark = signal(false);
  private readonly document = inject(DOCUMENT);

  toggleTheme(): void {
    const next = !this.isDark();
    this.isDark.set(next);
    this.document.body.classList.toggle('theme-dark', next);
  }
}
