import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import PropertyGrid from './components/PropertyGrid';
import Stats from './components/Stats';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
          <Features />
          <PropertyGrid />
          <Stats />
          <Newsletter />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;