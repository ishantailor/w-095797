
import Layout from '@/components/Layout';
import { Monitor, Laptop, Keyboard, Wrench, Phone } from 'lucide-react';

const Products = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Our Products & Services
          </h1>
          <p className="text-xl md:text-2xl">
            Complete IT Solutions for All Your Needs
          </p>
        </div>
      </section>

      {/* Products Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Gaming PCs */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <Monitor className="w-12 h-12 text-blue-600 mr-4" />
                <h2 className="text-2xl font-bold text-gray-800">Gaming PCs</h2>
              </div>
              <p className="text-gray-600 mb-6">
                High performance, budget-friendly, custom builds tailored to your gaming needs
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Entry Level Gaming PCs (₹20,000 - ₹30,000)</li>
                <li>• Mid Range Gaming PCs (₹30,000 - ₹60,000)</li>
                <li>• High End Gaming PCs (₹60,000+)</li>
                <li>• Custom RGB and Liquid Cooling Options</li>
                <li>• AMD & Intel Processor Options</li>
                <li>• NVIDIA & AMD Graphics Cards</li>
              </ul>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800 font-semibold">Starting from ₹22,000</p>
                <p className="text-blue-600 text-sm">Includes warranty and free setup</p>
              </div>
            </div>

            {/* Refurbished Laptops */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <Laptop className="w-12 h-12 text-green-600 mr-4" />
                <h2 className="text-2xl font-bold text-gray-800">Refurbished Laptops</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Quality refurbished laptops from Dell, HP, Lenovo with warranty
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Dell Latitude & Inspiron Series</li>
                <li>• HP EliteBook & Pavilion Series</li>
                <li>• Lenovo ThinkPad & IdeaPad Series</li>
                <li>• Core i3, i5, i7 Processors Available</li>
                <li>• 4GB to 16GB RAM Options</li>
                <li>• SSD Upgrades Available</li>
              </ul>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-green-800 font-semibold">Starting from ₹15,000</p>
                <p className="text-green-600 text-sm">3-6 months warranty included</p>
              </div>
            </div>

            {/* Accessories */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <Keyboard className="w-12 h-12 text-purple-600 mr-4" />
                <h2 className="text-2xl font-bold text-gray-800">Accessories & Components</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Wide range of PC components and accessories from top brands
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Mechanical & Gaming Keyboards</li>
                <li>• Gaming Mice & Mousepads</li>
                <li>• SSDs, HDDs & RAM Upgrades</li>
                <li>• Graphics Cards & Processors</li>
                <li>• Monitors (LED, LCD, Gaming)</li>
                <li>• UPS, Speakers & Webcams</li>
              </ul>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-purple-800 font-semibold">Competitive Prices</p>
                <p className="text-purple-600 text-sm">Genuine products with warranty</p>
              </div>
            </div>

            {/* Repair Services */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <Wrench className="w-12 h-12 text-orange-600 mr-4" />
                <h2 className="text-2xl font-bold text-gray-800">Repair Services</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Expert diagnostics, upgrades, and fast service for all your devices
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Laptop Screen Replacement</li>
                <li>• Motherboard Repair</li>
                <li>• Data Recovery Services</li>
                <li>• Virus Removal & OS Installation</li>
                <li>• Hardware Upgrades (RAM, SSD)</li>
                <li>• Desktop PC Troubleshooting</li>
              </ul>
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="text-orange-800 font-semibold">Quick Turnaround</p>
                <p className="text-orange-600 text-sm">Most repairs completed within 24-48 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Expert Advice?</h2>
          <p className="text-xl mb-8">
            Call us for personalized recommendations or visit our store to see our products in person!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+91-XXXXXXXXXX"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              Call for Expert Advice
            </a>
            <a
              href="#"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-800 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Visit Our Store
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
