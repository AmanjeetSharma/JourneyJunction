import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-blue-600 text-white py-4 px-6 shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-gray-300 transition-colors duration-300">
            Journey-Junction
          </Link>
        </div>

        {/* Hamburger Icon for Medium and Smaller Screens */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none transition-transform duration-300 hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links for Medium and Larger Screens */}
        <ul className="hidden md:flex space-x-6">
          {[
            { path: '/', label: 'Home' },
            { path: '/about', label: 'About Us' },
            { path: '/destinations', label: 'Destinations' },
            { path: '/blog', label: 'Blog' },
            { path: '/contact', label: 'Contact' },
          ].map((link, index) => (
            <li key={index}>
              <Link
                to={link.path}
                className="hover:text-gray-300 transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute left-0 bottom-0 h-0.5 bg-gray-300 w-0 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-blue-600 transition-all duration-500 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <ul className="flex flex-col space-y-4 p-6">
          {[
            { path: '/', label: 'Home' },
            { path: '/about', label: 'About Us' },
            { path: '/destinations', label: 'Destinations' },
            { path: '/blog', label: 'Blog' },
            { path: '/contact', label: 'Contact' },
          ].map((link, index) => (
            <li key={index}>
              <Link
                to={link.path}
                onClick={toggleMenu}
                className="hover:text-gray-300 transition-colors duration-300 block py-2"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;