
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-600 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold">
              Hari Om Infotech
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                About Us
              </Link>
              <Link
                to="/products"
                className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Products
              </Link>
              <Link
                to="/offers"
                className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Offers
              </Link>
              <Link
                to="/gallery"
                className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Gallery
              </Link>
              <Link
                to="/contact"
                className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contact
              </Link>
              <a
                href="tel:+91-XXXXXXXXXX"
                className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-colors"
              >
                <Phone size={16} />
                Call Now
              </a>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md hover:bg-blue-700 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={cn(
        "md:hidden transition-all duration-300 overflow-hidden",
        isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-blue-700">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/products"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800"
            onClick={() => setIsMenuOpen(false)}
          >
            Products
          </Link>
          <Link
            to="/offers"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800"
            onClick={() => setIsMenuOpen(false)}
          >
            Offers
          </Link>
          <Link
            to="/gallery"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800"
            onClick={() => setIsMenuOpen(false)}
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <a
            href="tel:+91-XXXXXXXXXX"
            className="block px-3 py-2 rounded-md text-base font-medium bg-orange-500 hover:bg-orange-600"
          >
            📞 Call Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
