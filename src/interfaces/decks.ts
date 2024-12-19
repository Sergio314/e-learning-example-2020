export interface ResponseDeckDTO {
  id: string;
  name: string;
  deckDescription: string;
  deckSlug: string;
  type: 'Acquisition' | 'Fluency';
  deckCardsNumber: number;
}
