import React from 'react';
import { MapPin, Bath, Bed, Maximize, Heart } from 'lucide-react';

interface PropertyCardProps {
  image: string;
  price: string;
  location: string;
  beds: number;
  baths: number;
  area: number;
  isNew?: boolean;
}

const PropertyCard = ({ image, price, location, beds, baths, area, isNew }: PropertyCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300">
      <div className="relative">
        <img src={image} alt={location} className="w-full h-56 object-cover" />
        {isNew && (
          <span className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            New
          </span>
        )}
        <button className="absolute top-4 right-4 p-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-100">
          <Heart className="h-5 w-5 text-gray-600" />
        </button>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">{price}</h3>
            <div className="flex items-center text-gray-500 mt-1">
              <MapPin className="h-4 w-4 mr-1" />
              <span className="text-sm">{location}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-gray-500 border-t pt-4">
          <div className="flex items-center">
            <Bed className="h-4 w-4 mr-1" />
            <span className="text-sm">{beds} Beds</span>
          </div>
          <div className="flex items-center">
            <Bath className="h-4 w-4 mr-1" />
            <span className="text-sm">{baths} Baths</span>
          </div>
          <div className="flex items-center">
            <Maximize className="h-4 w-4 mr-1" />
            <span className="text-sm">{area} m²</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;