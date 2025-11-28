import React, { useState } from 'react';
import { Villa } from '../types';
import VillaCard from '../components/VillaCard';
import VillaModal from '../components/VillaModal';
import { Search, SlidersHorizontal } from 'lucide-react';

interface VillasProps {
  villas: Villa[];
}

const Villas: React.FC<VillasProps> = ({ villas }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('All');
  const [selectedVilla, setSelectedVilla] = useState<Villa | null>(null);

  const filteredVillas = villas.filter(villa => {
    const matchesSearch = villa.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          villa.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = locationFilter === 'All' || villa.location === locationFilter;
    
    return matchesSearch && matchesLocation;
  });

  const locations = Array.from(new Set(villas.map(v => v.location)));

  return (
    <div className="min-h-screen bg-gray-50 pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12 animate-fade-in-down">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Nos Villas de Prestige</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Trouvez votre coin de paradis parmi notre sélection exclusive de villas en Guadeloupe.
            </p>
        </div>

        {/* Filter Bar */}
        <div className="bg-white p-4 rounded-xl shadow-sm mb-10 border border-gray-200 flex flex-col md:flex-row items-center gap-4 sticky top-24 z-30">
            <div className="relative flex-1 w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input 
                    type="text" 
                    placeholder="Rechercher une villa, une ville..." 
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-turquoise-500 focus:ring-1 focus:ring-turquoise-500 outline-none transition-all"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            
            <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                 <div className="flex items-center px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 text-gray-500 whitespace-nowrap">
                    <SlidersHorizontal className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">Filtrer par :</span>
                 </div>
                 <button 
                    onClick={() => setLocationFilter('All')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap border ${locationFilter === 'All' ? 'bg-turquoise-500 text-white border-turquoise-500 shadow-md' : 'bg-white text-gray-600 border-gray-200 hover:border-turquoise-300'}`}
                 >
                    Tout
                 </button>
                 {locations.map(loc => (
                     <button 
                        key={loc}
                        onClick={() => setLocationFilter(loc)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap border ${locationFilter === loc ? 'bg-turquoise-500 text-white border-turquoise-500 shadow-md' : 'bg-white text-gray-600 border-gray-200 hover:border-turquoise-300'}`}
                     >
                        {loc}
                     </button>
                 ))}
            </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVillas.map(villa => (
            <VillaCard 
              key={villa.id} 
              villa={villa} 
              onClick={() => setSelectedVilla(villa)}
            />
          ))}
        </div>

        {filteredVillas.length === 0 && (
            <div className="text-center py-20 bg-white rounded-2xl border border-gray-100 shadow-sm mt-8">
                <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-xl text-gray-500 font-medium">Aucune villa ne correspond à votre recherche.</p>
                <p className="text-gray-400 mt-2">Essayez d'autres mots-clés ou changez de localisation.</p>
                <button 
                    onClick={() => { setSearchTerm(''); setLocationFilter('All'); }}
                    className="mt-6 text-turquoise-600 font-bold hover:text-turquoise-800 hover:underline transition-all"
                >
                    Réinitialiser les filtres
                </button>
            </div>
        )}
      </div>

      {/* Detail Modal */}
      {selectedVilla && (
        <VillaModal 
          villa={selectedVilla} 
          onClose={() => setSelectedVilla(null)} 
        />
      )}
    </div>
  );
};

export default Villas;