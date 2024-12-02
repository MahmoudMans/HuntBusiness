import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string; // Placeholder for actual icons
  action: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  action,
  link,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transition-shadow duration-300">
      {/* Icon */}
      <div className="text-5xl text-green-600 mb-6">{icon}</div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-green-900">{title}</h3>

      {/* Description */}
      <p className="mt-4 text-green-700">{description}</p>

      {/* Action Link */}
      <div className="mt-6">
        <a
          href={link}
          className="text-green-600 hover:text-green-800 font-medium underline transition-colors"
        >
          {action}
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
