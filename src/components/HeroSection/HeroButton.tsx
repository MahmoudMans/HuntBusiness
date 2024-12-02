import React from 'react';

interface HeroButtonProps {
  label: string;
  variant: 'primary' | 'secondary';
}

const HeroButton: React.FC<HeroButtonProps> = ({ label, variant }) => {
  const buttonClasses =
    variant === 'primary'
      ? 'bg-gradient-to-r from-green-500 to-green-700 text-white hover:from-green-600 hover:to-green-800 px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all'
      : 'bg-white border border-green-500 text-green-900 hover:bg-green-50 px-8 py-3 rounded-full font-semibold shadow-sm hover:shadow-md transform hover:scale-105 transition-all';

  return <button className={`transition-all duration-300 ${buttonClasses}`}>{label}</button>;
};

export default HeroButton;
