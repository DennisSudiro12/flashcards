import { Component, signal } from '@angular/core';
import { FlashcardListComponent } from './flashcard-list/flashcard-list.component';


@Component({
  selector: 'app-root',
  imports: [FlashcardListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
}
