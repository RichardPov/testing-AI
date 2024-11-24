import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { clsx } from 'clsx';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <span className="text-blue-600 font-bold text-3xl tracking-tight">rentio</span>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <NavLink href="#" label="Prenájom" />
            <NavLink href="#" label="Predaj" />
            <NavLink href="#" label="Spravovať inzeráty" />
            <NavLink href="#" label="Zmluvy" />
            <div className="w-px h-6 bg-gray-200 mx-4" />
            <NavLink href="#" label="Prihlásiť sa" />
            <button className="ml-4 bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-blue-700 transition-all duration-200 hover:shadow-lg hover:shadow-blue-200">
              Zaregistrovať sa
            </button>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full text-gray-700 hover:bg-gray-100 transition-colors focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={clsx(
          "md:hidden absolute left-0 right-0 bg-white border-b border-gray-100",
          isOpen ? "block" : "hidden"
        )}>
          <div className="px-4 py-3 space-y-2">
            <MobileNavLink href="#" label="Prenájom" />
            <MobileNavLink href="#" label="Predaj" />
            <MobileNavLink href="#" label="Spravovať inzeráty" />
            <MobileNavLink href="#" label="Zmluvy" />
            <div className="w-full h-px bg-gray-100 my-3" />
            <MobileNavLink href="#" label="Prihlásiť sa" />
            <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-700 transition-all duration-200 mt-3">
              Zaregistrovať sa
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, label }: { href: string; label: string }) => (
  <a
    href={href}
    className="px-4 py-2 text-sm text-gray-700 rounded-full hover:bg-gray-50 transition-colors relative group"
  >
    {label}
    <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
  </a>
);

const MobileNavLink = ({ href, label }: { href: string; label: string }) => (
  <a
    href={href}
    className="block w-full px-4 py-2.5 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm"
  >
    {label}
  </a>
);

export default Navbar;