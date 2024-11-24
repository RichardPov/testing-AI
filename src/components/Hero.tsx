import React, { useState } from 'react';
import { Search, MapPin, Euro } from 'lucide-react';
import PropertyCard from './PropertyCard';
import { clsx } from 'clsx';

const Hero = () => {
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  
  const featuredProperty = {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    price: '850€/mesiac',
    location: 'Bratislava, Staré Mesto',
    beds: 2,
    baths: 1,
    area: 65,
    isNew: true
  };

  return (
    <div className="relative bg-gradient-to-b from-blue-50/50 via-white to-white pt-32 pb-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-8 -left-8 w-20 h-20 bg-blue-500/10 rounded-full blur-2xl" />
            <div className="relative">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Nájdi si bývanie jednoducho a rýchlo
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl">
                Skvelá platforma kde si nájdete prenájom, spolubývanie a to všetko bez poplatkov realitnej kancelárie.
              </p>

              <div className="bg-white p-4 rounded-2xl shadow-xl shadow-blue-100/50 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                  <div 
                    className={clsx(
                      "flex items-center border rounded-xl p-3 transition-all duration-200",
                      focusedInput === 'location' 
                        ? "border-blue-600 bg-blue-50/30 ring-4 ring-blue-100" 
                        : "border-gray-200 hover:border-gray-300"
                    )}
                  >
                    <MapPin className={clsx(
                      "h-5 w-5 mr-2 transition-colors",
                      focusedInput === 'location' ? "text-blue-600" : "text-gray-400"
                    )} />
                    <input
                      type="text"
                      placeholder="Lokalita"
                      className="w-full bg-transparent border-0 focus:ring-0 text-gray-900 placeholder-gray-500"
                      onFocus={() => setFocusedInput('location')}
                      onBlur={() => setFocusedInput(null)}
                    />
                  </div>
                  <div 
                    className={clsx(
                      "flex items-center border rounded-xl p-3 transition-all duration-200",
                      focusedInput === 'price' 
                        ? "border-blue-600 bg-blue-50/30 ring-4 ring-blue-100" 
                        : "border-gray-200 hover:border-gray-300"
                    )}
                  >
                    <Euro className={clsx(
                      "h-5 w-5 mr-2 transition-colors",
                      focusedInput === 'price' ? "text-blue-600" : "text-gray-400"
                    )} />
                    <input
                      type="text"
                      placeholder="Cena"
                      className="w-full bg-transparent border-0 focus:ring-0 text-gray-900 placeholder-gray-500"
                      onFocus={() => setFocusedInput('price')}
                      onBlur={() => setFocusedInput(null)}
                    />
                  </div>
                </div>
                <button className="w-full bg-blue-600 text-white px-6 py-3.5 rounded-xl hover:bg-blue-700 transition-all duration-200 flex items-center justify-center gap-2 font-medium shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300">
                  <Search className="h-5 w-5" />
                  Hľadať prenájom
                </button>
              </div>

              <div className="flex items-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-gray-900 text-2xl">2,000+</span>
                  <span className="text-gray-500">prenájmov</span>
                </div>
                <div className="w-px h-8 bg-gray-200" />
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-gray-900 text-2xl">10,000+</span>
                  <span className="text-gray-500">používateľov</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl" />
            <div className="relative">
              <PropertyCard {...featuredProperty} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;