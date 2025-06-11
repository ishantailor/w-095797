
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Hari Om Infotech</h3>
            <p className="text-gray-300 mb-4">
              Your one-stop destination for all IT hardware needs in Surat. 
              Custom PCs, refurbished laptops, and trusted support services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-400 hover:text-blue-300">
                [FB]
              </a>
              <a href="#" className="text-pink-400 hover:text-pink-300">
                [Instagram]
              </a>
              <a href="#" className="text-red-400 hover:text-red-300">
                [YouTube]
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/offers" className="text-gray-300 hover:text-white">
                  Offers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <MapPin size={16} className="mr-2 text-blue-400" />
                <span className="text-gray-300 text-sm">XYZ Road, Surat, Gujarat</span>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-2 text-green-400" />
                <span className="text-gray-300 text-sm">+91-XXXXXXXXXX</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-2 text-red-400" />
                <span className="text-gray-300 text-sm">hariominfotech@email.com</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-2 text-yellow-400" />
                <span className="text-gray-300 text-sm">Mon-Sat: 10 AM - 8 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Hari Om Infotech. All Rights Reserved. Made with ❤️ in Surat
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
