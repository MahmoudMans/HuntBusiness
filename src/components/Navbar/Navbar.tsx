import React, { useState } from 'react';
import NavbarLink from './NavbarLink';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-extrabold text-blue-600">
          <a href="/" className="flex items-center space-x-2">
            <svg
              className="w-8 h-8 text-blue-600"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0L15.09 7.36H22.18L17.54 11.95L19.63 19.63L12 15.27L4.36 19.63L6.45 11.95L1.82 7.36H8.91L12 0Z" />
            </svg>
            <span>[Company]</span>
          </a>
        </div>

        {/* Links for Desktop */}
        <div className="hidden md:flex space-x-8">
          <NavbarLink label="Home" href="/" />
          <NavbarLink label="About" href="/about" />
          <NavbarLink label="Services" href="/services" />
          <NavbarLink label="Portfolio" href="/portfolio" />
          <NavbarLink label="Contact" href="/contact" />
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="block md:hidden text-blue-600 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-50 shadow-md transition-all duration-300">
          <div className="flex flex-col items-center py-4 space-y-4">
            <NavbarLink label="Home" href="/" />
            <NavbarLink label="About" href="/about" />
            <NavbarLink label="Services" href="/services" />
            <NavbarLink label="Portfolio" href="/portfolio" />
            <NavbarLink label="Contact" href="/contact" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
