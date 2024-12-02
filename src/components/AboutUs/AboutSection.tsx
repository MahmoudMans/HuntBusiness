import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-green-900">
            Who We Are
          </h2>
          <p className="text-lg md:text-xl text-green-700 leading-relaxed">
            We are a team of passionate innovators dedicated to delivering
            cutting-edge solutions that empower businesses to grow
            sustainably. Our focus is on building long-lasting relationships
            with our clients by understanding their needs and delivering
            exceptional results.
          </p>
          <p className="text-lg md:text-xl text-green-700 leading-relaxed">
            At the heart of our journey lies a commitment to integrity,
            innovation, and sustainability. These values drive everything we
            do, ensuring we make a meaningful impact on the world around us.
          </p>
        </div>

        {/* Image or Decorative Content */}
        <div className="relative">
          <div className="w-full h-64 md:h-96 bg-gradient-to-r from-green-200 to-green-400 rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/600x400" // Replace with your image
              alt="About Us"
              className="w-full h-full object-cover opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
