
import Layout from '@/components/Layout';
import { Monitor, Laptop, Wrench, Store } from 'lucide-react';

const Gallery = () => {
  // Placeholder image URLs - you can replace these with actual images
  const galleryItems = {
    builds: [
      { id: 1, title: "High-End Gaming PC Build", description: "RTX 4070 + Ryzen 7" },
      { id: 2, title: "Budget Gaming Setup", description: "GTX 1660 + Ryzen 5" },
      { id: 3, title: "Workstation Build", description: "For video editing and design" },
      { id: 4, title: "RGB Gaming PC", description: "Custom lighting setup" },
    ],
    laptops: [
      { id: 1, title: "Dell Latitude Refurbished", description: "Business laptop - Like new condition" },
      { id: 2, title: "HP Pavilion Gaming", description: "Gaming laptop with GTX graphics" },
      { id: 3, title: "Lenovo ThinkPad", description: "Professional grade laptop" },
      { id: 4, title: "HP EliteBook", description: "Premium business laptop" },
    ],
    repairs: [
      { id: 1, title: "Laptop Screen Replacement", description: "Before and after repair" },
      { id: 2, title: "Motherboard Repair", description: "Complex circuit board repair" },
      { id: 3, title: "Desktop Upgrade", description: "RAM and SSD upgrade" },
      { id: 4, title: "Data Recovery", description: "Successful data recovery project" },
    ],
    store: [
      { id: 1, title: "Store Interior", description: "Our well-organized store layout" },
      { id: 2, title: "Component Display", description: "Wide range of PC components" },
      { id: 3, title: "Workshop Area", description: "Professional repair workspace" },
      { id: 4, title: "Customer Service", description: "Helping customers choose right products" },
    ]
  };

  const GallerySection = ({ title, items, icon: Icon, bgColor }) => (
    <div className="mb-16">
      <div className="flex items-center justify-center mb-8">
        <Icon className={`w-8 h-8 ${bgColor} mr-3`} />
        <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <Icon className="w-12 h-12 mx-auto mb-2 opacity-50" />
                <p className="text-sm">Image Coming Soon</p>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            🖼️ Our Work Gallery
          </h1>
          <p className="text-xl md:text-2xl">
            See Our Work in Action
          </p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Work in Action</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Take a look at our custom PC builds, refurbished laptops, repair work, and store interior. 
              Each project represents our commitment to quality and customer satisfaction.
            </p>
          </div>

          {/* Customer PC Builds */}
          <GallerySection
            title="Customer PC Builds"
            items={galleryItems.builds}
            icon={Monitor}
            bgColor="text-blue-600"
          />

          {/* Refurbished Laptops Showcase */}
          <GallerySection
            title="Refurbished Laptops Showcase"
            items={galleryItems.laptops}
            icon={Laptop}
            bgColor="text-green-600"
          />

          {/* Before & After Repair Jobs */}
          <GallerySection
            title="Before & After Repair Jobs"
            items={galleryItems.repairs}
            icon={Wrench}
            bgColor="text-orange-600"
          />

          {/* Store Interior Photos */}
          <GallerySection
            title="Store Interior Photos"
            items={galleryItems.store}
            icon={Store}
            bgColor="text-purple-600"
          />
        </div>
      </section>

      {/* Upload Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Share Your Experience</h2>
          <p className="text-lg text-gray-600 mb-8">
            Got a custom PC from us? We'd love to feature your setup in our gallery! 
            Send us photos of your build and we'll showcase it with your permission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hariominfotech@email.com"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Email Your Photos
            </a>
            <a
              href="tel:+91-XXXXXXXXXX"
              className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Create Your Own Build?</h2>
          <p className="text-xl mb-8">
            Let's discuss your requirements and build the perfect PC for you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+91-XXXXXXXXXX"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Start Your Build Today
            </a>
            <a
              href="#"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Visit Our Store
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
