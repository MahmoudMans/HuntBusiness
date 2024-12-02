import React from 'react';

interface AboutCardProps {
  title: string;
  description: string;
  icon: string; // Placeholder for actual icons
}

const AboutCard: React.FC<AboutCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-gray-50 shadow-md rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
      {/* Icon */}
      <div className="text-5xl text-green-600 mb-6">{icon}</div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-green-900">{title}</h3>

      {/* Description */}
      <p className="mt-4 text-green-700">{description}</p>
    </div>
  );
};

export default AboutCard;
