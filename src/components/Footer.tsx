
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4 text-white">Hari Om Infotech</h3>
            <p className="text-slate-400 mb-4 leading-relaxed">
              Your one-stop destination for all IT hardware needs in Surat. 
              Custom PCs, refurbished laptops, and trusted support services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">
                [FB]
              </a>
              <a href="#" className="text-pink-400 hover:text-pink-300 transition-colors duration-200">
                [Instagram]
              </a>
              <a href="#" className="text-red-400 hover:text-red-300 transition-colors duration-200">
                [YouTube]
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-slate-400 hover:text-white transition-colors duration-200">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/offers" className="text-slate-400 hover:text-white transition-colors duration-200">
                  Offers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin size={16} className="mr-3 text-blue-400 flex-shrink-0" />
                <span className="text-slate-400 text-sm">XYZ Road, Surat, Gujarat</span>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-3 text-emerald-400 flex-shrink-0" />
                <span className="text-slate-400 text-sm">+91-XXXXXXXXXX</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-3 text-orange-400 flex-shrink-0" />
                <span className="text-slate-400 text-sm">hariominfotech@email.com</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-3 text-yellow-400 flex-shrink-0" />
                <span className="text-slate-400 text-sm">Mon-Sat: 10 AM - 8 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-500">
            © 2025 Hari Om Infotech. All Rights Reserved. Made with ❤️ in Surat
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
