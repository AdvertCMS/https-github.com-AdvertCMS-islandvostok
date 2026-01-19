
export interface Tour {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  duration: string;
  price: string;
  category: 'Sea' | 'Land' | 'Air' | 'Island';
  features: string[];
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export enum TourCategory {
  Sea = 'Sea',
  Land = 'Land',
  Air = 'Air',
  Island = 'Island'
}
