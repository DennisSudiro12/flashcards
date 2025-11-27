import { Routes } from '@angular/router';
import { DeckListComponent } from './deck-list/deck-list.component';
import { DeckDetailComponent } from './deck-detail/deck-detail.component';

export const routes: Routes = [
  { path: '', component: DeckListComponent },            // home: all decks
  { path: 'decks/:id', component: DeckDetailComponent }, // deck detail
  { path: '**', redirectTo: '' }                         // fallback
];
