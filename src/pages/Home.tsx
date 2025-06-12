
import Layout from '@/components/Layout';
import { Phone, MapPin, Star, Monitor, Laptop, Wrench, HardDrive } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hari Om Infotech
          </h1>
          <p className="text-xl md:text-2xl mb-2 text-slate-300">
            Custom PCs | Laptops | Tech Solutions
          </p>
          <p className="text-lg mb-8 text-slate-400">
            Get the Best Deals on Gaming PCs, Refurbished Laptops & More!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+91-XXXXXXXXXX"
              className="bg-emerald-600 hover:bg-emerald-700 px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              <Phone size={20} />
              Call Now
            </a>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-slate-400 hover:bg-white hover:text-slate-900 px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2"
            >
              <MapPin size={20} />
              Visit Store
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">About Hari Om Infotech</h2>
          <p className="text-lg text-slate-600 max-w-4xl mx-auto mb-8 leading-relaxed">
            We are a Surat-based IT hardware store offering the best in technology—custom PCs, 
            refurbished laptops, computer accessories, and more. Trusted by 1000+ happy customers.
          </p>
          <Link
            to="/about"
            className="bg-slate-800 hover:bg-slate-900 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Our Top Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Our Top Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 text-center border border-slate-200 hover:border-blue-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Monitor className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900">Custom Gaming PC Builds</h3>
              <p className="text-slate-600">High-performance gaming PCs tailored to your needs and budget</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 text-center border border-slate-200 hover:border-emerald-300">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Laptop className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900">Refurbished Laptops</h3>
              <p className="text-slate-600">Quality refurbished laptops from Dell, HP, Lenovo with warranty</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 text-center border border-slate-200 hover:border-orange-300">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900">Laptop & PC Repair</h3>
              <p className="text-slate-600">Expert repair services with fast turnaround times</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 text-center border border-slate-200 hover:border-purple-300">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <HardDrive className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900">Accessories & Components</h3>
              <p className="text-slate-600">Wide range of PC components and accessories</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Featured Products / Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 border border-slate-200">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">Budget Gaming PC</h3>
              <p className="text-3xl font-bold text-slate-900 mb-2">₹ 22,000</p>
              <p className="text-slate-600">Perfect for 1080p gaming and productivity tasks</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 border border-slate-200">
              <h3 className="text-xl font-semibold mb-2 text-emerald-600">Refurbished Laptops</h3>
              <p className="text-3xl font-bold text-slate-900 mb-2">Starting ₹ 15,000</p>
              <p className="text-slate-600">Quality refurbished laptops with warranty</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 border border-slate-200">
              <h3 className="text-xl font-semibold mb-2 text-orange-600">Free Wi-Fi Adapter</h3>
              <p className="text-xl font-bold text-slate-900 mb-2">With Every PC Build</p>
              <p className="text-slate-600">Limited time offer on custom PC builds</p>
            </div>
          </div>
          <div className="text-center">
            <Link
              to="/products"
              className="bg-slate-800 hover:bg-slate-900 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">What Our Customers Say</h2>
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto text-center border border-slate-200">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-lg text-slate-600 mb-4 leading-relaxed">
              "Best place in Surat for gaming PCs. Fast service and great prices!"
            </p>
            <p className="font-semibold text-slate-900">– Ravi P.</p>
          </div>
          <div className="text-center mt-8">
            <Link
              to="/contact"
              className="text-slate-700 hover:text-slate-900 font-semibold transition-colors"
            >
              Read More Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need help finding the perfect setup?</h2>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center gap-2">
              <Phone className="w-6 h-6 text-emerald-400" />
              <span className="text-lg text-slate-300">Call Us: +91-XXXXXXXXXX</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-6 h-6 text-blue-400" />
              <span className="text-lg text-slate-300">Visit Us: XYZ Road, Surat</span>
            </div>
          </div>
          <Link
            to="/contact"
            className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Get Directions
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
