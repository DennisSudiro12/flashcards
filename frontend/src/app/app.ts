import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlashcardListComponent } from './flashcard-list/flashcard-list.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FlashcardListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
}
