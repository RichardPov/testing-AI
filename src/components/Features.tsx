import React from 'react';
import { Camera, Star, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Camera className="h-8 w-8" />,
      title: 'Virtuálne prehliadky',
      description: 'Prezrite si nehnuteľnosti z pohodlia domova pomocou našich 3D prehliadok'
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: 'Najlepšie ponuky',
      description: 'Vyberáme pre vás tie najlepšie ponuky na trhu'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Spolubývanie',
      description: 'Nájdite si spolubývajúcich a ušetrite na bývaní'
    }
  ];

  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Prečo si vybrať našu platformu?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Ponúkame komplexné riešenia pre vaše bývanie
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <div className="text-orange-500">{feature.icon}</div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;