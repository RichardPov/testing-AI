import React from 'react';
import { Home, Users, TrendingUp } from 'lucide-react';

const Stats = () => {
  return (
    <section className="bg-orange-50 rounded-2xl p-8 mb-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Nový spôsob, ako nájsť svoj nový domov
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Najdite si svoje vysnívané miesto na bývanie v raz dva 50,000 aktívnych ponúk každý mesiac
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <TrendingUp className="h-8 w-8 text-orange-500" />
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-2">7.4%</div>
          <p className="text-gray-600">Medziročný nárast</p>
        </div>

        <div className="text-center">
          <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Home className="h-8 w-8 text-orange-500" />
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-2">3,856</div>
          <p className="text-gray-600">Aktívnych ponúk</p>
        </div>

        <div className="text-center">
          <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="h-8 w-8 text-orange-500" />
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-2">321</div>
          <p className="text-gray-600">Spokojných klientov</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;