import React from 'react';
import { X, MapPin, Users, Bed, Star, Wifi, Wind, Check, Coffee, Tv, Car } from 'lucide-react';
import { Villa } from '../types';

interface VillaModalProps {
  villa: Villa;
  onClose: () => void;
}

const VillaModal: React.FC<VillaModalProps> = ({ villa, onClose }) => {
  return (
    <div className="fixed inset-0 z-[60] overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity backdrop-blur-sm" 
          aria-hidden="true"
          onClick={onClose}
        ></div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        {/* Modal Panel */}
        <div className="relative inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white p-2 rounded-full text-gray-600 hover:text-red-500 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="h-64 sm:h-80 w-full relative">
            <img 
              src={villa.imageUrl} 
              alt={villa.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <h2 className="text-3xl font-bold text-white">{villa.name}</h2>
              <div className="flex items-center text-turquoise-300 mt-2">
                <MapPin className="w-5 h-5 mr-1" />
                <span>{villa.location}</span>
              </div>
            </div>
          </div>

          <div className="px-6 py-6 sm:px-10 sm:py-8">
            <div className="flex flex-col md:flex-row gap-8">
              
              {/* Left Column: Details */}
              <div className="md:w-2/3">
                <div className="flex items-center space-x-6 mb-6 text-gray-700 bg-gray-50 p-4 rounded-xl">
                  <div className="flex items-center">
                    <Users className="w-5 h-5 mr-2 text-turquoise-600" />
                    <span className="font-medium">{villa.capacity} Voyageurs</span>
                  </div>
                  <div className="flex items-center">
                    <Bed className="w-5 h-5 mr-2 text-turquoise-600" />
                    <span className="font-medium">{villa.bedrooms} Chambres</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 mr-2 text-yellow-400 fill-current" />
                    <span className="font-medium">{villa.rating}/5</span>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">À propos de ce logement</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {villa.description} Vivez une expérience unique au cœur de la Guadeloupe. Ce logement est conçu pour vous offrir confort, luxe et sérénité. Profitez des espaces extérieurs aménagés et de la proximité avec les plus belles plages.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Ce que propose ce logement</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {villa.amenities.map((amenity, idx) => (
                      <div key={idx} className="flex items-center text-gray-700">
                        <Check className="w-5 h-5 mr-3 text-turquoise-500" />
                        {amenity}
                      </div>
                    ))}
                    {/* Fake extra amenities for demo */}
                    <div className="flex items-center text-gray-700"><Wifi className="w-5 h-5 mr-3 text-turquoise-500" /> Wi-Fi Haut Débit</div>
                    <div className="flex items-center text-gray-700"><Coffee className="w-5 h-5 mr-3 text-turquoise-500" /> Machine à café</div>
                    <div className="flex items-center text-gray-700"><Car className="w-5 h-5 mr-3 text-turquoise-500" /> Parking gratuit</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Sticky Booking Card */}
              <div className="md:w-1/3">
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg sticky top-6">
                  <div className="flex justify-between items-end mb-6">
                    <div>
                      <span className="text-3xl font-bold text-gray-900">{villa.pricePerNight}€</span>
                      <span className="text-gray-500"> / nuit</span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="border border-gray-300 rounded-lg p-3">
                      <div className="text-xs text-gray-500 uppercase font-bold mb-1">Dates</div>
                      <div className="text-gray-900">Sélectionnez vos dates</div>
                    </div>
                    <div className="border border-gray-300 rounded-lg p-3">
                      <div className="text-xs text-gray-500 uppercase font-bold mb-1">Voyageurs</div>
                      <div className="text-gray-900">{villa.capacity} voyageurs max</div>
                    </div>
                  </div>

                  <button className="w-full bg-turquoise-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-turquoise-700 transition-colors shadow-md hover:shadow-lg transform active:scale-95 duration-200">
                    Réserver
                  </button>
                  <p className="text-center text-gray-500 text-xs mt-3">Aucun montant ne sera débité pour le moment</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VillaModal;