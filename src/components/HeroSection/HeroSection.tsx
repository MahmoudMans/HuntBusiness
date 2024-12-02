import React from 'react';
import HeroContent from './HeroContent';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-white text-green-900 min-h-screen flex items-center justify-center overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-r from-green-200 to-green-400 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-r from-green-300 to-green-500 rounded-full blur-3xl opacity-50"></div>

      {/* Hero Content */}
      <div className="container mx-auto px-6 text-center">
        <HeroContent />
      </div>
    </div>
  );
};

export default HeroSection;
