
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';
import { Monitor, Laptop, Printer, HardDrive, Wifi, Camera, Keyboard, Gamepad2, Cable, Projector, Volume2, Cpu } from 'lucide-react';

const Products = () => {
  const categories = [
    {
      id: 'laptops',
      name: 'Laptops',
      icon: Laptop,
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop',
      description: 'Gaming, Business & Student Laptops'
    },
    {
      id: 'desktops',
      name: 'Desktop PCs',
      icon: Monitor,
      image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=400&h=300&fit=crop',
      description: 'Custom Gaming & Office PCs'
    },
    {
      id: 'printers',
      name: 'Printers',
      icon: Printer,
      image: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400&h=300&fit=crop',
      description: 'Inkjet & Laser Printers'
    },
    {
      id: 'components',
      name: 'Computer Components',
      icon: Cpu,
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=300&fit=crop',
      description: 'CPU, GPU, RAM, Motherboards'
    },
    {
      id: 'storage',
      name: 'Storage Solutions',
      icon: HardDrive,
      image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16c?w=400&h=300&fit=crop',
      description: 'SSDs, HDDs, External Storage'
    },
    {
      id: 'networking',
      name: 'Networking Equipment',
      icon: Wifi,
      image: 'https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=400&h=300&fit=crop',
      description: 'Routers, Switches, WiFi Extenders'
    },
    {
      id: 'monitors',
      name: 'Monitors',
      icon: Monitor,
      image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop',
      description: 'Gaming, Professional, Ultrawide'
    },
    {
      id: 'peripherals',
      name: 'Keyboards & Mice',
      icon: Keyboard,
      image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop',
      description: 'Mechanical, Wireless, Gaming'
    },
    {
      id: 'gaming',
      name: 'Gaming Accessories',
      icon: Gamepad2,
      image: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=400&h=300&fit=crop',
      description: 'Controllers, Headsets, Chairs'
    },
    {
      id: 'cables',
      name: 'Cables & Connectors',
      icon: Cable,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      description: 'HDMI, USB, Power Cables'
    },
    {
      id: 'projectors',
      name: 'Projectors',
      icon: Projector,
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
      description: 'Business & Home Theater'
    },
    {
      id: 'audio',
      name: 'Speakers & Audio',
      icon: Volume2,
      image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&h=300&fit=crop',
      description: 'Speakers, Headphones, Microphones'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Browse Our Products
          </h1>
          <p className="text-xl md:text-2xl">
            Complete IT Solutions - From Components to Complete Systems
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Product Categories</h2>
            <p className="text-lg text-gray-600">Choose a category to explore our products</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Link
                  key={category.id}
                  to={`/products/${category.id}`}
                  className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full p-2">
                      <IconComponent size={24} className="text-blue-600" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {category.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help Choosing?</h2>
          <p className="text-xl mb-8">
            Our experts are here to help you find the perfect IT solution for your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+91-XXXXXXXXXX"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              📞 Call for Expert Advice
            </a>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-800 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
