
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
    <nav className="bg-slate-800 text-white shadow-xl sticky top-0 z-50 border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold text-white hover:text-blue-400 transition-colors">
              Hari Om Infotech
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className="text-slate-300 hover:text-white hover:bg-slate-700 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-slate-300 hover:text-white hover:bg-slate-700 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
              >
                About Us
              </Link>
              <Link
                to="/products"
                className="text-slate-300 hover:text-white hover:bg-slate-700 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
              >
                Products
              </Link>
              <Link
                to="/offers"
                className="text-slate-300 hover:text-white hover:bg-slate-700 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
              >
                Offers
              </Link>
              <Link
                to="/gallery"
                className="text-slate-300 hover:text-white hover:bg-slate-700 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
              >
                Gallery
              </Link>
              <Link
                to="/contact"
                className="text-slate-300 hover:text-white hover:bg-slate-700 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
              >
                Contact
              </Link>
              <a
                href="tel:+91-XXXXXXXXXX"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-all duration-200 shadow-lg hover:shadow-xl"
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
              className="p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-700 focus:outline-none transition-colors"
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
        <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/products"
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Products
          </Link>
          <Link
            to="/offers"
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Offers
          </Link>
          <Link
            to="/gallery"
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <a
            href="tel:+91-XXXXXXXXXX"
            className="block px-3 py-2 rounded-md text-base font-medium bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
          >
            📞 Call Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
