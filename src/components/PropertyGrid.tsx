import React from 'react';
import PropertyCard from './PropertyCard';

const PropertyGrid = () => {
  const properties = [
    {
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
      price: '1,500€/mesiac',
      location: 'Bratislava, Ružinov',
      beds: 2,
      baths: 1,
      area: 65,
      isNew: true
    },
    {
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800',
      price: '1,200€/mesiac',
      location: 'Bratislava, Staré Mesto',
      beds: 1,
      baths: 1,
      area: 45
    },
    {
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800',
      price: '2,100€/mesiac',
      location: 'Bratislava, Nové Mesto',
      beds: 3,
      baths: 2,
      area: 85
    },
    {
      image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=800',
      price: '950€/mesiac',
      location: 'Bratislava, Petržalka',
      beds: 1,
      baths: 1,
      area: 35,
      isNew: true
    },
    {
      image: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&q=80&w=800',
      price: '1,800€/mesiac',
      location: 'Bratislava, Karlova Ves',
      beds: 2,
      baths: 2,
      area: 75
    },
    {
      image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=800',
      price: '1,350€/mesiac',
      location: 'Bratislava, Dúbravka',
      beds: 2,
      baths: 1,
      area: 55
    }
  ];

  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Odporúčané nehnuteľnosti
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Pozrite si naše najlepšie ponuky v okolí
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property, index) => (
          <PropertyCard key={index} {...property} />
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Prehľadávať nehnuteľnosti
        </button>
      </div>
    </section>
  );
};

export default PropertyGrid;