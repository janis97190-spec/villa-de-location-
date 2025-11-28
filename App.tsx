import React, { useState } from 'react';
import { HashRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Villas from './pages/Villas';
import Excursions from './pages/Excursions';
import AIChat from './components/AIChat';
import { VILLAS, EXCURSIONS } from './constants';
import { Page } from './types';
import { Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME:
        return <Home villas={VILLAS} excursions={EXCURSIONS} onNavigate={setCurrentPage} />;
      case Page.VILLAS:
        return <Villas villas={VILLAS} />;
      case Page.EXCURSIONS:
        return <Excursions excursions={EXCURSIONS} />;
      default:
        return <Home villas={VILLAS} excursions={EXCURSIONS} onNavigate={setCurrentPage} />;
    }
  };

  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-slate-50">
        <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
        
        <main className="flex-grow">
          {renderPage()}
        </main>
        
        <AIChat />

        <footer className="bg-turquoise-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-4 font-serif">GuadaVillas</h3>
                        <p className="text-turquoise-100 text-sm">
                            Votre partenaire de confiance pour des vacances de rêve en Guadeloupe. Location de villas de luxe et expériences sur mesure.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Liens Rapides</h4>
                        <ul className="space-y-2 text-turquoise-100 text-sm">
                            <li onClick={() => setCurrentPage(Page.HOME)} className="cursor-pointer hover:text-white">Accueil</li>
                            <li onClick={() => setCurrentPage(Page.VILLAS)} className="cursor-pointer hover:text-white">Villas</li>
                            <li onClick={() => setCurrentPage(Page.EXCURSIONS)} className="cursor-pointer hover:text-white">Excursions</li>
                            <li className="cursor-pointer hover:text-white">Contact</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Contactez-nous</h4>
                        <ul className="space-y-2 text-turquoise-100 text-sm">
                            <li className="flex items-center"><Phone className="w-4 h-4 mr-2" /> +590 690 12 34 56</li>
                            <li className="flex items-center"><Mail className="w-4 h-4 mr-2" /> contact@guadavillas.com</li>
                            <li className="flex items-center">Saint-François, Guadeloupe</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Suivez-nous</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"><Instagram className="w-5 h-5" /></a>
                            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"><Facebook className="w-5 h-5" /></a>
                            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"><Twitter className="w-5 h-5" /></a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-turquoise-800 pt-8 text-center text-turquoise-300 text-sm">
                    © 2024 GuadaVillas & Évasions. Tous droits réservés.
                </div>
            </div>
        </footer>
      </div>
    </HashRouter>
  );
};

export default App;