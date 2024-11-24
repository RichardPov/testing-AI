import React from 'react';
import { Mail } from 'lucide-react';

const Newsletter = () => {
  return (
    <section className="bg-white rounded-2xl p-8 shadow-sm">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Hľadáš si prenájom?
        </h2>
        <p className="text-gray-600 mb-8">
          Získaj prístup k exkluzívnym ponukám a buď prvý, kto sa o nich dozvie.
          <br />
          <span className="text-sm">Sľubujeme, že nebudeme spamovať</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <div className="flex-1">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="email"
                placeholder="Zadajte svoj email"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap">
            Odoberať
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;