export interface Card {
  id: number;
  question: string;
  answer: string;
  showAnswer: boolean;
}

export interface Card {
  id: number;
  front: string;
  back: string;
}

export interface Deck {
  id: number;
  name: string;
  description?: string;
  cards: Card[];
}