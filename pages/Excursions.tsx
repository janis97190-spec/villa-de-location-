import React, { useState } from 'react';
import { Excursion } from '../types';
import ExcursionCard from '../components/ExcursionCard';
import { Compass, Anchor, Mountain, Camera, Palmtree } from 'lucide-react';

interface ExcursionsProps {
  excursions: Excursion[];
}

const Excursions: React.FC<ExcursionsProps> = ({ excursions }) => {
  const [activeFilter, setActiveFilter] = useState<string>('Tout');

  const filters = [
    { label: 'Tout', icon: Compass },
    { label: 'Mer', icon: Anchor },
    { label: 'Terre', icon: Mountain },
    { label: 'Culture', icon: Camera },
    { label: 'Aventure', icon: Palmtree },
  ];

  const filteredExcursions = activeFilter === 'Tout' 
    ? excursions 
    : excursions.filter(e => e.type === activeFilter);

  return (
    <div className="min-h-screen bg-sand-100/30 pt-8 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Découvrez la Guadeloupe Autrement</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Des activités sélectionnées pour vous faire vivre des moments intenses et inoubliables.
            </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-4">
          <div className="flex bg-white p-1.5 rounded-full shadow-sm border border-gray-200">
            {filters.map((filter) => {
              const Icon = filter.icon;
              return (
                <button
                  key={filter.label}
                  onClick={() => setActiveFilter(filter.label)}
                  className={`flex items-center px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 whitespace-nowrap ${
                    activeFilter === filter.label
                      ? 'bg-turquoise-600 text-white shadow-md transform scale-105'
                      : 'text-gray-500 hover:text-turquoise-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className={`w-4 h-4 mr-2 ${activeFilter === filter.label ? 'text-white' : 'text-gray-400'}`} />
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="space-y-8">
          {filteredExcursions.map(excursion => (
            <ExcursionCard key={excursion.id} excursion={excursion} />
          ))}
          
          {filteredExcursions.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Aucune excursion trouvée dans cette catégorie pour le moment.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Excursions;