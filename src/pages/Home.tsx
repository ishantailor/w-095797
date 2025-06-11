
import Layout from '@/components/Layout';
import { Phone, MapPin, Star, Monitor, Laptop, Wrench, HardDrive } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hari Om Infotech
          </h1>
          <p className="text-xl md:text-2xl mb-2">
            Custom PCs | Laptops | Tech Solutions
          </p>
          <p className="text-lg mb-8">
            Get the Best Deals on Gaming PCs, Refurbished Laptops & More!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+91-XXXXXXXXXX"
              className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              Call Now
            </a>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <MapPin size={20} />
              Visit Store
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">About Hari Om Infotech</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
            We are a Surat-based IT hardware store offering the best in technology—custom PCs, 
            refurbished laptops, computer accessories, and more. Trusted by 1000+ happy customers.
          </p>
          <Link
            to="/about"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Our Top Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Top Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <Monitor className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Custom Gaming PC Builds</h3>
              <p className="text-gray-600">High-performance gaming PCs tailored to your needs and budget</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <Laptop className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Refurbished Laptops</h3>
              <p className="text-gray-600">Quality refurbished laptops from Dell, HP, Lenovo with warranty</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <Wrench className="w-16 h-16 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Laptop & PC Repair</h3>
              <p className="text-gray-600">Expert repair services with fast turnaround times</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <HardDrive className="w-16 h-16 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Accessories & Components</h3>
              <p className="text-gray-600">Wide range of PC components and accessories</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Featured Products / Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">Budget Gaming PC</h3>
              <p className="text-3xl font-bold text-gray-800 mb-2">₹ 22,000</p>
              <p className="text-gray-600">Perfect for 1080p gaming and productivity tasks</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-green-600">Refurbished Laptops</h3>
              <p className="text-3xl font-bold text-gray-800 mb-2">Starting ₹ 15,000</p>
              <p className="text-gray-600">Quality refurbished laptops with warranty</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-orange-600">Free Wi-Fi Adapter</h3>
              <p className="text-xl font-bold text-gray-800 mb-2">With Every PC Build</p>
              <p className="text-gray-600">Limited time offer on custom PC builds</p>
            </div>
          </div>
          <div className="text-center">
            <Link
              to="/products"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What Our Customers Say</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-lg text-gray-600 mb-4">
              "Best place in Surat for gaming PCs. Fast service and great prices!"
            </p>
            <p className="font-semibold text-gray-800">– Ravi P.</p>
          </div>
          <div className="text-center mt-8">
            <Link
              to="/contact"
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              Read More Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need help finding the perfect setup?</h2>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center gap-2">
              <Phone className="w-6 h-6 text-green-400" />
              <span className="text-lg">Call Us: +91-XXXXXXXXXX</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-6 h-6 text-blue-400" />
              <span className="text-lg">Visit Us: XYZ Road, Surat</span>
            </div>
          </div>
          <Link
            to="/contact"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Get Directions
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
