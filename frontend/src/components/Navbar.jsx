import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-blue-600 text-white py-4 px-6 shadow-md">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-gray-300">Journey-Junction</Link>
        </div>

        {/* Hamburger Icon for Medium and Smaller Screens */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Navigation Links for Medium and Larger Screens */}
        <ul className={`flex space-x-6 md:flex-row ${isMenuOpen ? 'flex-col absolute bg-blue-600 top-16 left-0 w-full md:flex md:static' : 'hidden md:flex'}`}>
          <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link to="/about" className="hover:text-gray-300">About Us</Link></li>
          <li><Link to="/destinations" className="hover:text-gray-300">Destinations</Link></li>
          <li><Link to="/blog" className="hover:text-gray-300">Blog</Link></li>
          <li><Link to="/gallery" className="hover:text-gray-300">Gallery</Link></li>
          <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
