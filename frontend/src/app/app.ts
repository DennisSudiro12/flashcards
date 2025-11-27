import { Component, inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
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
