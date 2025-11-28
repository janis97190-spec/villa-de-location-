import React from 'react';
import { Clock, MapPin, ArrowRight } from 'lucide-react';
import { Excursion } from '../types';

interface ExcursionCardProps {
  excursion: Excursion;
}

const ExcursionCard: React.FC<ExcursionCardProps> = ({ excursion }) => {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100">
      <div className="md:w-1/3 relative h-48 md:h-auto">
        <img
          src={excursion.imageUrl}
          alt={excursion.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 left-3 bg-turquoise-600 text-white text-xs font-bold px-3 py-1 rounded-full">
          {excursion.type}
        </div>
      </div>
      
      <div className="p-6 md:w-2/3 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{excursion.name}</h3>
            <span className="text-lg font-bold text-turquoise-600">{excursion.price}€</span>
          </div>
          
          <div className="flex items-center text-gray-500 text-sm mb-3 space-x-4">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              {excursion.location}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {excursion.duration}
            </div>
          </div>
          
          <p className="text-gray-600 mb-4 text-sm">
            {excursion.description}
          </p>
        </div>
        
        <div className="flex justify-end">
           <button className="group flex items-center text-turquoise-600 font-semibold text-sm hover:text-turquoise-800 transition-colors">
            Réserver cette activité
            <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExcursionCard;