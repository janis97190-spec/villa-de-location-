
import { Villa, Excursion } from './types';

export const VILLAS: Villa[] = [
  {
    id: 'v1',
    name: 'Villa Iguane',
    location: 'Saint-François',
    pricePerNight: 350,
    bedrooms: 4,
    capacity: 8,
    amenities: ['Piscine à débordement', 'Vue Mer', 'Wi-Fi', 'Climatisation', 'Cuisine équipée'],
    imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200',
    description: 'Magnifique villa moderne située sur la route de la Pointe des Châteaux. Accès direct au lagon et piscine miroir.',
    rating: 4.8
  },
  {
    id: 'v2',
    name: 'Domaine de la Mangrove',
    location: 'Deshaies',
    pricePerNight: 220,
    bedrooms: 2,
    capacity: 4,
    amenities: ['Jardin tropical', 'Piscine privée', 'Barbecue', 'Parking'],
    imageUrl: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=1200',
    description: 'Un havre de paix niché au cœur de la nature luxuriante de Basse-Terre, architecture bois typique, à 5min de la plage de Grande Anse.',
    rating: 4.9
  },
  {
    id: 'v3',
    name: 'Villa Blue Lagoon',
    location: 'Le Gosier',
    pricePerNight: 500,
    bedrooms: 5,
    capacity: 10,
    amenities: ['Piscine', 'Jacuzzi', 'Salle de sport', 'Conciergerie', 'Vue panoramique'],
    imageUrl: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&q=80&w=1200',
    description: 'Luxe et volupté pour cette villa d’exception surplombant l’îlet du Gosier. Couchers de soleil inoubliables.',
    rating: 5.0
  },
  {
    id: 'v4',
    name: 'Bungalow Ti-Sucrier',
    location: 'Sainte-Anne',
    pricePerNight: 150,
    bedrooms: 1,
    capacity: 2,
    amenities: ['Plage à pied', 'Terrasse', 'Hamac', 'Kitchenette'],
    imageUrl: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=1200',
    description: 'Idéal pour les couples, ce bungalow coloré de charme avec sa petite piscine privée est situé à deux pas de la plage de Bois Jolan.',
    rating: 4.6
  },
  {
    id: 'v5',
    name: 'Villa Volcan',
    location: 'Saint-Claude',
    pricePerNight: 280,
    bedrooms: 3,
    capacity: 6,
    amenities: ['Vue Soufrière', 'Cheminée', 'Jardin fruitier', 'Spa'],
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-60c37c663561?auto=format&fit=crop&q=80&w=1200',
    description: 'Fraîcheur et authenticité au pied du volcan de la Soufrière. Une maison de maître avec piscine chauffée au milieu d\'un jardin botanique.',
    rating: 4.7
  }
];

export const EXCURSIONS: Excursion[] = [
  {
    id: 'e1',
    name: 'Plongée à la Réserve Cousteau',
    type: 'Mer',
    duration: '3 heures',
    price: 60,
    location: 'Bouillante',
    imageUrl: 'https://images.unsplash.com/photo-1682687981922-7b55dbb30892?auto=format&fit=crop&q=80&w=1200',
    description: 'Explorez les fonds marins exceptionnels de la réserve Cousteau. Nagez avec les tortues vertes dans une eau cristalline.'
  },
  {
    id: 'e2',
    name: 'Randonnée à la Soufrière',
    type: 'Aventure',
    duration: '5 heures',
    price: 45,
    location: 'Saint-Claude',
    imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200',
    description: 'Ascension du volcan actif de la Guadeloupe, "La Vieille Dame", à travers la forêt tropicale humide jusqu\'au sommet fumant.'
  },
  {
    id: 'e3',
    name: 'Journée Catamaran Petite-Terre',
    type: 'Mer',
    duration: 'Journée complète',
    price: 110,
    location: 'Départ Saint-François',
    imageUrl: 'https://images.unsplash.com/photo-1500643764030-22c608f6d62d?auto=format&fit=crop&q=80&w=1200',
    description: 'Découvrez les iguanes, les requins citrons et les tortues dans cette réserve naturelle paradisiaque accessible uniquement par bateau.'
  },
  {
    id: 'e4',
    name: 'Visite de la Distillerie Bologne',
    type: 'Culture',
    duration: '2 heures',
    price: 15,
    location: 'Basse-Terre',
    imageUrl: 'https://images.unsplash.com/photo-1627407304123-b68e9185a539?auto=format&fit=crop&q=80&w=1200',
    description: 'Plongez dans l’histoire du rhum agricole au pied du volcan, visitez les champs de canne et profitez d’une dégustation exclusive.'
  }
];
