import { Component, inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FlashcardListComponent } from './flashcard-list/flashcard-list.component';


@Component({
  selector: 'app-root',
  imports: [FlashcardListComponent],
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
