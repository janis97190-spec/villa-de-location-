import React, { useState } from 'react';
import { Menu, X, Palmtree, Sun, MapPin } from 'lucide-react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Accueil', page: Page.HOME, icon: <Sun className="w-4 h-4 mr-1" /> },
    { label: 'Villas', page: Page.VILLAS, icon: <Palmtree className="w-4 h-4 mr-1" /> },
    { label: 'Excursions', page: Page.EXCURSIONS, icon: <MapPin className="w-4 h-4 mr-1" /> },
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-md border-b border-turquoise-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center cursor-pointer" onClick={() => onNavigate(Page.HOME)}>
            <div className="flex-shrink-0 flex items-center text-turquoise-600">
              <Palmtree className="h-8 w-8" />
              <span className="ml-2 font-bold text-xl tracking-tight text-turquoise-900">GuadaVillas</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => onNavigate(item.page)}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  currentPage === item.page
                    ? 'text-turquoise-600 bg-turquoise-50'
                    : 'text-gray-600 hover:text-turquoise-500 hover:bg-gray-50'
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
            <button className="bg-turquoise-500 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-turquoise-600 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Réserver
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-turquoise-500 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  onNavigate(item.page);
                  setIsOpen(false);
                }}
                className={`flex items-center w-full px-3 py-4 rounded-md text-base font-medium ${
                  currentPage === item.page
                    ? 'text-turquoise-600 bg-turquoise-50'
                    : 'text-gray-600 hover:text-turquoise-500 hover:bg-gray-50'
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
            <button className="w-full mt-4 bg-turquoise-500 text-white px-5 py-3 rounded-md font-semibold hover:bg-turquoise-600">
              Réserver maintenant
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;