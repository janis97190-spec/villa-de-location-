import React from 'react';
import { MapPin, Users, Bed, Star, Wifi, Wind } from 'lucide-react';
import { Villa } from '../types';

interface VillaCardProps {
  villa: Villa;
  onClick?: () => void;
}

const VillaCard: React.FC<VillaCardProps> = ({ villa, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100 cursor-pointer h-full flex flex-col"
    >
      <div className="relative overflow-hidden h-64 shrink-0">
        <img
          src={villa.imageUrl}
          alt={villa.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center shadow-sm">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="ml-1 text-sm font-bold text-gray-800">{villa.rating}</span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 pt-12">
            <h3 className="text-white text-xl font-bold shadow-black drop-shadow-md truncate">{villa.name}</h3>
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center text-turquoise-600 mb-2 text-sm font-medium">
          <MapPin className="w-4 h-4 mr-1" />
          {villa.location}
        </div>
        
        <p className="text-gray-600 text-sm line-clamp-2 mb-4 h-10">
          {villa.description}
        </p>

        <div className="flex items-center justify-between py-3 border-t border-gray-100 text-gray-500 text-sm mt-auto">
          <div className="flex items-center" title="Chambres">
            <Bed className="w-4 h-4 mr-1" />
            <span>{villa.bedrooms} ch.</span>
          </div>
          <div className="flex items-center" title="Capacité">
            <Users className="w-4 h-4 mr-1" />
            <span>{villa.capacity} pers.</span>
          </div>
           <div className="flex items-center space-x-2">
            {villa.amenities.includes('Wi-Fi') && <Wifi className="w-4 h-4" />}
            {villa.amenities.includes('Climatisation') && <Wind className="w-4 h-4" />}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-gray-900">{villa.pricePerNight}€</span>
            <span className="text-gray-500 text-sm"> / nuit</span>
          </div>
          <button className="bg-turquoise-50 text-turquoise-700 group-hover:bg-turquoise-500 group-hover:text-white px-4 py-2 rounded-lg font-semibold transition-colors text-sm">
            Voir détails
          </button>
        </div>
      </div>
    </div>
  );
};

export default VillaCard;