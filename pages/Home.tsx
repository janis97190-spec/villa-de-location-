
import React from 'react';
import { Page, Villa, Excursion } from '../types';
import { ArrowRight, Star, Quote } from 'lucide-react';
import VillaCard from '../components/VillaCard';
import ExcursionCard from '../components/ExcursionCard';

interface HomeProps {
  villas: Villa[];
  excursions: Excursion[];
  onNavigate: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ villas, excursions, onNavigate }) => {
  const featuredVillas = villas.slice(0, 3);
  const featuredExcursions = excursions.slice(0, 2);

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <div className="relative h-[85vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&q=80&w=1920"
            alt="Plage de la Caravelle Guadeloupe"
            className="w-full h-full object-cover animate-fade-in"
          />
          <div className="absolute inset-0 bg-black/20 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        </div>
        
        <div className="relative h-full flex flex-col justify-center items-center text-center px-4 max-w-5xl mx-auto">
          <div className="animate-slide-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
             <span className="bg-turquoise-500/20 text-turquoise-100 border border-turquoise-400/30 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-semibold mb-6 inline-block uppercase tracking-wider">
               L'île aux Belles Eaux
             </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 drop-shadow-2xl tracking-tight animate-slide-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            Évadez-vous en <span className="text-transparent bg-clip-text bg-gradient-to-r from-turquoise-300 to-teal-200">Guadeloupe</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-100 mb-10 max-w-3xl drop-shadow-lg font-light animate-slide-up opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            Des villas d'exception et des aventures inoubliables entre Terre et Mer.
            Laissez-vous guider par le chant des alizés.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            <button
              onClick={() => onNavigate(Page.VILLAS)}
              className="bg-turquoise-500 hover:bg-turquoise-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl hover:shadow-turquoise-500/30 flex items-center justify-center ring-4 ring-turquoise-500/30"
            >
              Trouver ma Villa
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button
              onClick={() => onNavigate(Page.EXCURSIONS)}
              className="bg-white/90 hover:bg-white text-turquoise-900 px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg backdrop-blur-sm"
            >
              Voir les Excursions
            </button>
          </div>
        </div>
      </div>

      {/* Featured Villas */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Nos Villas Coup de Cœur</h2>
            <p className="text-gray-500 text-lg">Sélectionnées pour leur charme et leur emplacement unique.</p>
          </div>
          <button
            onClick={() => onNavigate(Page.VILLAS)}
            className="hidden md:flex items-center text-turquoise-600 font-bold hover:text-turquoise-800 transition-colors bg-turquoise-50 px-4 py-2 rounded-lg"
          >
            Voir tout le catalogue
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredVillas.map(villa => (
            <div key={villa.id} onClick={() => onNavigate(Page.VILLAS)}>
               <VillaCard villa={villa} />
            </div>
          ))}
        </div>
        
        <div className="mt-10 md:hidden text-center">
             <button
            onClick={() => onNavigate(Page.VILLAS)}
            className="w-full bg-turquoise-50 text-turquoise-700 py-3 rounded-xl font-bold"
          >
            Voir toutes les villas
          </button>
        </div>
      </div>

      {/* Trust/Features Section */}
      <div className="bg-turquoise-900 py-20 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <pattern id="pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1" fill="#ffffff" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#pattern)" />
            </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative z-10">
          <div className="p-8 rounded-2xl hover:bg-white/5 transition-colors duration-300">
            <div className="bg-gradient-to-br from-turquoise-400 to-teal-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform rotate-3 hover:rotate-6 transition-transform">
                <Star className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Service Premium</h3>
            <p className="text-turquoise-100 leading-relaxed">Une conciergerie dédiée disponible 7j/7 pour satisfaire toutes vos demandes, du chef à domicile au massage privé.</p>
          </div>
           <div className="p-8 rounded-2xl hover:bg-white/5 transition-colors duration-300">
             <div className="bg-gradient-to-br from-turquoise-400 to-teal-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform -rotate-3 hover:-rotate-6 transition-transform">
                <div className="text-4xl">🌴</div>
            </div>
            <h3 className="text-2xl font-bold mb-3">Emplacements de Rêve</h3>
            <p className="text-turquoise-100 leading-relaxed">De la plage de Grande-Anse aux sommets de la Soufrière, nous sélectionnons uniquement le meilleur de l'île.</p>
          </div>
           <div className="p-8 rounded-2xl hover:bg-white/5 transition-colors duration-300">
             <div className="bg-gradient-to-br from-turquoise-400 to-teal-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform rotate-3 hover:rotate-6 transition-transform">
                <div className="text-4xl">🤖</div>
            </div>
            <h3 className="text-2xl font-bold mb-3">Assistant IA Ti'Punch</h3>
            <p className="text-turquoise-100 leading-relaxed">Notre intelligence artificielle experte vous aide à organiser votre séjour parfait en temps réel, 24/24h.</p>
          </div>
        </div>
      </div>

      {/* Featured Excursions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-sand-100/30">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Vivez l'Aventure</h2>
            <p className="text-gray-500 text-lg">Des expériences authentiques pour découvrir la Guadeloupe autrement.</p>
          </div>
          <button
            onClick={() => onNavigate(Page.EXCURSIONS)}
             className="hidden md:flex items-center text-turquoise-600 font-bold hover:text-turquoise-800 transition-colors bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200"
          >
            Explorer les activités
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {featuredExcursions.map(excursion => (
            <ExcursionCard key={excursion.id} excursion={excursion} />
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Ce que nos voyageurs disent</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Testimonial 1 */}
                <div className="bg-gray-50 p-8 rounded-3xl relative">
                    <Quote className="absolute top-8 right-8 w-10 h-10 text-turquoise-200 opacity-50" />
                    <div className="flex items-center space-x-1 text-yellow-400 mb-4">
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                    </div>
                    <p className="text-gray-600 italic mb-6 text-lg">"Une semaine de rêve à la Villa Iguane. La vue est à couper le souffle et l'assistant Ti'Punch nous a déniché un resto incroyable !"</p>
                    <div className="flex items-center">
                        <div className="w-12 h-12 bg-gray-300 rounded-full mr-4 overflow-hidden">
                             <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150" alt="User" />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900">Sophie M.</h4>
                            <p className="text-sm text-gray-500">Juin 2024</p>
                        </div>
                    </div>
                </div>

                {/* Testimonial 2 */}
                <div className="bg-gray-50 p-8 rounded-3xl relative mt-4 md:mt-0 shadow-xl border border-gray-100 transform md:-translate-y-4">
                    <Quote className="absolute top-8 right-8 w-10 h-10 text-turquoise-200 opacity-50" />
                     <div className="flex items-center space-x-1 text-yellow-400 mb-4">
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                    </div>
                    <p className="text-gray-600 italic mb-6 text-lg">"L'organisation était parfaite. La villa correspondait exactement aux photos et l'excursion à Petite-Terre restera gravée dans nos mémoires."</p>
                    <div className="flex items-center">
                         <div className="w-12 h-12 bg-gray-300 rounded-full mr-4 overflow-hidden">
                             <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150" alt="User" />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900">Marc & Julie</h4>
                            <p className="text-sm text-gray-500">Août 2024</p>
                        </div>
                    </div>
                </div>

                {/* Testimonial 3 */}
                <div className="bg-gray-50 p-8 rounded-3xl relative mt-4 md:mt-0">
                    <Quote className="absolute top-8 right-8 w-10 h-10 text-turquoise-200 opacity-50" />
                     <div className="flex items-center space-x-1 text-yellow-400 mb-4">
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                    </div>
                    <p className="text-gray-600 italic mb-6 text-lg">"Service client au top. Nous avons eu un petit souci de transport et l'équipe a géré ça en 10 minutes. Je recommande à 100%."</p>
                    <div className="flex items-center">
                        <div className="w-12 h-12 bg-gray-300 rounded-full mr-4 overflow-hidden">
                             <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150" alt="User" />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900">Thomas L.</h4>
                            <p className="text-sm text-gray-500">Avril 2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
