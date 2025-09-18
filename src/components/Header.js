import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
   <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-4 sm:p-6 md:p-8 bg-black">

      <div className="flex items-center">
        <img
          src="/clogo.png"
          alt="IcICon Consulting Logo"
          className="h-8 sm:h-10 w-auto object-contain"
        />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-6 lg:space-x-8">
        <Link to="/" className="text-sm lg:text-base hover:text-cyan-400 transition-colors duration-300">
          About
        </Link>
        <Link to="/LNG" className="text-sm lg:text-base hover:text-cyan-400 transition-colors duration-300">
          LNG
        </Link>
        <Link to="/Hydrogen" className="text-sm lg:text-base hover:text-cyan-400 transition-colors duration-300">
          Hydrogen
        </Link>
        <Link to="/CryoGenics" className="text-sm lg:text-base hover:text-cyan-400 transition-colors duration-300">
          CryoGenics
        </Link>
        <Link to="/PCS" className="text-sm lg:text-base hover:text-cyan-400 transition-colors duration-300">
          Project Case Studies
        </Link>
        <Link to="/contact" className="text-sm lg:text-base hover:text-cyan-400 transition-colors duration-300">
          Contact
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
      >
        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black/95 border-t border-white/10 md:hidden">
          <div className="flex flex-col items-center py-4 space-y-4">
            <Link
              to="/"
              className="text-lg hover:text-cyan-400 transition-colors duration-300"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/LNG"
              className="text-lg hover:text-cyan-400 transition-colors duration-300"
              onClick={toggleMenu}
            >
              LNG
            </Link>
            <Link
              to="/Hydrogen"
              className="text-lg hover:text-cyan-400 transition-colors duration-300"
              onClick={toggleMenu}
            >
              Hydrogen
            </Link>
            <Link
              to="/CryoGenics"
              className="text-lg hover:text-cyan-400 transition-colors duration-300"
              onClick={toggleMenu}
            >
              CryoGenics
            </Link>
            <Link
              to="/PCS"
              className="text-lg hover:text-cyan-400 transition-colors duration-300"
              onClick={toggleMenu}
            >
              Project Case Studies
            </Link>
            <Link
              to="/contact"
              className="text-lg hover:text-cyan-400 transition-colors duration-300"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;