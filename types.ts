export interface Villa {
  id: string;
  name: string;
  location: string;
  pricePerNight: number;
  bedrooms: number;
  capacity: number;
  amenities: string[];
  imageUrl: string;
  description: string;
  rating: number;
}

export interface Excursion {
  id: string;
  name: string;
  type: 'Mer' | 'Terre' | 'Culture' | 'Aventure';
  duration: string;
  price: number;
  imageUrl: string;
  description: string;
  location: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum Page {
  HOME = 'HOME',
  VILLAS = 'VILLAS',
  EXCURSIONS = 'EXCURSIONS',
}