import React from 'react';

interface NavbarLinkProps {
  label: string;
  href: string;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ label, href }) => {
  return (
    <a
      href={href}
      className="text-gray-600 hover:text-blue-600 hover:underline font-medium transition-colors duration-200"
    >
      {label}
    </a>
  );
};

export default NavbarLink;
