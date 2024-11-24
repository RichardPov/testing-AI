import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-orange-500 font-bold text-xl">rentio</span>
            </div>
            <p className="text-gray-400 mb-4">
              Najjednoduchší spôsob, ako si nájsť nové bývanie bez zbytočných poplatkov.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">ZDROJE</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Sprievodca stránkou</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Kontakt pre projekt</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">O NÁS</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">SpeedRent</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Ako to funguje</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Kontakt</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Investori</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">PODMIENKY A SÚKROMIE</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">GDPR</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Všeobecné obchodné podmienky služby</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Zásady ochrany osobných údajov</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© 2024 Rentio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;