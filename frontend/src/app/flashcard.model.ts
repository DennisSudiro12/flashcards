export interface Card {
  id: number;
  question: string;
  answer: string;
  showAnswer: boolean;
}

export interface Deck {
  id: number;
  name: string;
  description?: string;
  cards: Card[];
}