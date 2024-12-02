import React from 'react';
import HeroButton from './HeroButton';

const HeroContent: React.FC = () => {
  return (
    <div className="max-w-4xl">
      {/* Headline */}
      <h1 className="text-5xl md:text-7xl font-extrabold leading-snug tracking-tight text-green-900">
        Build a Better Future <br />
        <span className="bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent">
          With Sustainable Solutions
        </span>
      </h1>

      {/* Subtext */}
      <p className="mt-6 text-lg md:text-2xl text-green-700 leading-relaxed">
        Discover innovative ways to transform your business while staying
        environmentally conscious.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <HeroButton label="Get Started" variant="primary" />
        <HeroButton label="Learn More" variant="secondary" />
      </div>
    </div>
  );
};

export default HeroContent;
