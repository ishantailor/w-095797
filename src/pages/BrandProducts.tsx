
import Layout from '@/components/Layout';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Star, ShoppingCart, Eye } from 'lucide-react';

const BrandProducts = () => {
  const { category, brand } = useParams();

  // Comprehensive product data for all categories
  const productData = {
    laptops: {
      hp: {
        brandName: 'HP',
        products: [
          {
            id: 'hp-pavilion-15',
            name: 'HP Pavilion 15',
            price: '₹45,000',
            originalPrice: '₹50,000',
            image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop',
            specs: ['Intel Core i5', '8GB RAM', '512GB SSD', 'Windows 11'],
            rating: 4.3,
            inStock: true
          },
          {
            id: 'hp-elitebook-850',
            name: 'HP EliteBook 850',
            price: '₹65,000',
            originalPrice: '₹70,000',
            image: 'https://images.unsplash.com/photo-1541807084-5b52b6ee0547?w=400&h=300&fit=crop',
            specs: ['Intel Core i7', '16GB RAM', '1TB SSD', 'Windows 11 Pro'],
            rating: 4.6,
            inStock: true
          }
        ]
      },
      dell: {
        brandName: 'Dell',
        products: [
          {
            id: 'dell-inspiron-15',
            name: 'Dell Inspiron 15 3000',
            price: '₹38,000',
            originalPrice: '₹42,000',
            image: 'https://images.unsplash.com/photo-1588702547923-7ac5ac7fb46c?w=400&h=300&fit=crop',
            specs: ['Intel Core i3', '8GB RAM', '256GB SSD', 'Windows 11'],
            rating: 4.1,
            inStock: true
          },
          {
            id: 'dell-xps-13',
            name: 'Dell XPS 13',
            price: '₹95,000',
            originalPrice: '₹1,00,000',
            image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop',
            specs: ['Intel Core i7', '16GB RAM', '512GB SSD', 'Windows 11'],
            rating: 4.8,
            inStock: true
          }
        ]
      }
    },
    desktops: {
      custom: {
        brandName: 'Custom Build',
        products: [
          {
            id: 'gaming-pc-rtx4060',
            name: 'Gaming PC RTX 4060',
            price: '₹85,000',
            originalPrice: '₹90,000',
            image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=400&h=300&fit=crop',
            specs: ['Intel Core i5-12400F', '16GB DDR4', 'RTX 4060', '1TB NVMe SSD'],
            rating: 4.7,
            inStock: true
          },
          {
            id: 'office-pc-basic',
            name: 'Office PC Basic',
            price: '₹35,000',
            originalPrice: '₹38,000',
            image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=400&h=300&fit=crop',
            specs: ['Intel Core i3-12100', '8GB DDR4', 'Integrated Graphics', '512GB SSD'],
            rating: 4.2,
            inStock: true
          }
        ]
      },
      hp: {
        brandName: 'HP',
        products: [
          {
            id: 'hp-pavilion-desktop',
            name: 'HP Pavilion Desktop',
            price: '₹55,000',
            originalPrice: '₹60,000',
            image: 'https://images.unsplash.com/photo-1611078489935-0cb964de46d6?w=400&h=300&fit=crop',
            specs: ['Intel Core i5', '8GB RAM', '1TB HDD + 256GB SSD', 'Windows 11'],
            rating: 4.4,
            inStock: true
          }
        ]
      }
    },
    components: {
      intel: {
        brandName: 'Intel',
        products: [
          {
            id: 'intel-i5-13600k',
            name: 'Intel Core i5-13600K',
            price: '₹28,000',
            originalPrice: '₹30,000',
            image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=300&fit=crop',
            specs: ['14 Cores', '20 Threads', '3.5GHz Base', 'LGA 1700'],
            rating: 4.8,
            inStock: true
          },
          {
            id: 'intel-i7-13700k',
            name: 'Intel Core i7-13700K',
            price: '₹38,000',
            originalPrice: '₹42,000',
            image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=300&fit=crop',
            specs: ['16 Cores', '24 Threads', '3.4GHz Base', 'LGA 1700'],
            rating: 4.9,
            inStock: true
          }
        ]
      },
      nvidia: {
        brandName: 'NVIDIA',
        products: [
          {
            id: 'rtx-4060',
            name: 'NVIDIA RTX 4060',
            price: '₹32,000',
            originalPrice: '₹35,000',
            image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=300&fit=crop',
            specs: ['8GB GDDR6', 'DLSS 3.0', 'Ray Tracing', 'PCIe 4.0'],
            rating: 4.6,
            inStock: true
          }
        ]
      }
    },
    printers: {
      hp: {
        brandName: 'HP',
        products: [
          {
            id: 'hp-laserjet-pro',
            name: 'HP LaserJet Pro M404n',
            price: '₹18,500',
            originalPrice: '₹20,000',
            image: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400&h=300&fit=crop',
            specs: ['Monochrome Laser', '38 ppm', 'Network Ready', 'Auto Duplex'],
            rating: 4.4,
            inStock: true
          }
        ]
      },
      canon: {
        brandName: 'Canon',
        products: [
          {
            id: 'canon-pixma-g3010',
            name: 'Canon PIXMA G3010',
            price: '₹14,500',
            originalPrice: '₹16,000',
            image: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400&h=300&fit=crop',
            specs: ['All-in-One', 'Wireless', 'Refillable Ink', 'Mobile Print'],
            rating: 4.3,
            inStock: true
          }
        ]
      }
    },
    storage: {
      samsung: {
        brandName: 'Samsung',
        products: [
          {
            id: 'samsung-980-pro-1tb',
            name: 'Samsung 980 PRO 1TB',
            price: '₹8,500',
            originalPrice: '₹9,500',
            image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16c?w=400&h=300&fit=crop',
            specs: ['NVMe SSD', '7000 MB/s Read', 'PCIe 4.0', '5 Year Warranty'],
            rating: 4.8,
            inStock: true
          }
        ]
      },
      wd: {
        brandName: 'Western Digital',
        products: [
          {
            id: 'wd-blue-1tb',
            name: 'WD Blue 1TB HDD',
            price: '₹3,200',
            originalPrice: '₹3,500',
            image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16c?w=400&h=300&fit=crop',
            specs: ['7200 RPM', 'SATA 6Gb/s', '64MB Cache', '2 Year Warranty'],
            rating: 4.5,
            inStock: true
          }
        ]
      }
    },
    networking: {
      tplink: {
        brandName: 'TP-Link',
        products: [
          {
            id: 'tplink-archer-c6',
            name: 'TP-Link Archer C6 AC1200',
            price: '₹2,800',
            originalPrice: '₹3,200',
            image: 'https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=400&h=300&fit=crop',
            specs: ['Dual Band WiFi', '1200 Mbps', '4 Antennas', 'MU-MIMO'],
            rating: 4.3,
            inStock: true
          }
        ]
      },
      netgear: {
        brandName: 'Netgear',
        products: [
          {
            id: 'netgear-nighthawk-ax12',
            name: 'Netgear Nighthawk AX12',
            price: '₹18,500',
            originalPrice: '₹20,000',
            image: 'https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=400&h=300&fit=crop',
            specs: ['WiFi 6', '6000 Mbps', '8 Streams', 'Gaming Accelerator'],
            rating: 4.7,
            inStock: true
          }
        ]
      }
    },
    monitors: {
      lg: {
        brandName: 'LG',
        products: [
          {
            id: 'lg-24mp59g',
            name: 'LG 24MP59G Gaming Monitor',
            price: '₹12,500',
            originalPrice: '₹14,000',
            image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop',
            specs: ['24" IPS', '1080p', '75Hz', 'AMD FreeSync'],
            rating: 4.4,
            inStock: true
          }
        ]
      },
      samsung: {
        brandName: 'Samsung',
        products: [
          {
            id: 'samsung-odyssey-g5',
            name: 'Samsung Odyssey G5 27"',
            price: '₹22,500',
            originalPrice: '₹25,000',
            image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop',
            specs: ['27" Curved', '1440p', '144Hz', 'HDR10'],
            rating: 4.6,
            inStock: true
          }
        ]
      }
    },
    peripherals: {
      logitech: {
        brandName: 'Logitech',
        products: [
          {
            id: 'logitech-mx-master-3',
            name: 'Logitech MX Master 3',
            price: '₹7,500',
            originalPrice: '₹8,500',
            image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop',
            specs: ['Wireless', 'Precision Scroll', '70-day Battery', 'Multi-device'],
            rating: 4.8,
            inStock: true
          }
        ]
      },
      corsair: {
        brandName: 'Corsair',
        products: [
          {
            id: 'corsair-k70-rgb',
            name: 'Corsair K70 RGB MK.2',
            price: '₹12,500',
            originalPrice: '₹14,000',
            image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop',
            specs: ['Mechanical', 'Cherry MX Red', 'RGB Backlit', 'USB Passthrough'],
            rating: 4.7,
            inStock: true
          }
        ]
      }
    },
    gaming: {
      steelseries: {
        brandName: 'SteelSeries',
        products: [
          {
            id: 'steelseries-arctis-7',
            name: 'SteelSeries Arctis 7',
            price: '₹18,500',
            originalPrice: '₹20,000',
            image: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=400&h=300&fit=crop',
            specs: ['Wireless', '24 Hour Battery', 'DTS Headphone:X', 'Retractable Mic'],
            rating: 4.6,
            inStock: true
          }
        ]
      },
      razer: {
        brandName: 'Razer',
        products: [
          {
            id: 'razer-deathadder-v3',
            name: 'Razer DeathAdder V3',
            price: '₹5,500',
            originalPrice: '₹6,000',
            image: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=400&h=300&fit=crop',
            specs: ['30000 DPI', 'Focus Pro Sensor', 'Ergonomic Design', '90 Hour Battery'],
            rating: 4.7,
            inStock: true
          }
        ]
      }
    },
    cables: {
      amazonbasics: {
        brandName: 'Amazon Basics',
        products: [
          {
            id: 'hdmi-cable-2m',
            name: 'HDMI Cable 2M High Speed',
            price: '₹450',
            originalPrice: '₹500',
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
            specs: ['4K@60Hz', 'Ethernet Channel', 'Gold Plated', '2 Meter Length'],
            rating: 4.3,
            inStock: true
          }
        ]
      },
      belkin: {
        brandName: 'Belkin',
        products: [
          {
            id: 'usb-c-to-usb-a',
            name: 'USB-C to USB-A Cable',
            price: '₹850',
            originalPrice: '₹1,000',
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
            specs: ['USB 3.0', '1 Meter', 'Data + Charging', 'Durable Design'],
            rating: 4.5,
            inStock: true
          }
        ]
      }
    },
    projectors: {
      epson: {
        brandName: 'Epson',
        products: [
          {
            id: 'epson-eb-x41',
            name: 'Epson EB-X41 Projector',
            price: '₹32,500',
            originalPrice: '₹35,000',
            image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
            specs: ['3600 Lumens', 'XGA Resolution', 'HDMI + VGA', '15000:1 Contrast'],
            rating: 4.4,
            inStock: true
          }
        ]
      },
      benq: {
        brandName: 'BenQ',
        products: [
          {
            id: 'benq-th685',
            name: 'BenQ TH685 Gaming Projector',
            price: '₹65,000',
            originalPrice: '₹70,000',
            image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
            specs: ['3500 Lumens', '1080p', '8.3ms Input Lag', 'HDR10'],
            rating: 4.6,
            inStock: true
          }
        ]
      }
    },
    audio: {
      jbl: {
        brandName: 'JBL',
        products: [
          {
            id: 'jbl-quantum-100',
            name: 'JBL Quantum 100 Gaming Headset',
            price: '₹3,500',
            originalPrice: '₹4,000',
            image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&h=300&fit=crop',
            specs: ['40mm Drivers', 'Detachable Mic', 'Memory Foam', 'Multi-platform'],
            rating: 4.3,
            inStock: true
          }
        ]
      },
      creative: {
        brandName: 'Creative',
        products: [
          {
            id: 'creative-pebble-v3',
            name: 'Creative Pebble V3 Speakers',
            price: '₹4,500',
            originalPrice: '₹5,000',
            image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&h=300&fit=crop',
            specs: ['USB-C + Bluetooth', '8W RMS', 'RGB Lighting', 'Clear Dialog Enhancement'],
            rating: 4.5,
            inStock: true
          }
        ]
      }
    }
  };

  const currentBrandData = productData[category as keyof typeof productData]?.[brand as string];

  if (!currentBrandData) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Products Not Found</h1>
          <Link to="/products" className="text-blue-600 hover:text-blue-700">
            ← Back to Products
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Header */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <Link 
              to="/products" 
              className="text-blue-600 hover:text-blue-700 transition-colors"
            >
              Products
            </Link>
            <span className="text-gray-400">→</span>
            <Link 
              to={`/products/${category}`}
              className="text-blue-600 hover:text-blue-700 transition-colors capitalize"
            >
              {category}
            </Link>
            <span className="text-gray-400">→</span>
            <span className="text-gray-600">{currentBrandData.brandName}</span>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {currentBrandData.brandName} {category?.charAt(0).toUpperCase() + category?.slice(1)}
          </h1>
          <p className="text-xl text-gray-600">
            {currentBrandData.products.length} products available
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentBrandData.products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  {!product.inStock && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                      Out of Stock
                    </div>
                  )}
                  {product.originalPrice !== product.price && (
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
                      Sale
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={`${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">({product.rating})</span>
                  </div>

                  <ul className="text-sm text-gray-600 mb-4 space-y-1">
                    {product.specs.map((spec, index) => (
                      <li key={index}>• {spec}</li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                      {product.originalPrice !== product.price && (
                        <span className="text-sm text-gray-500 line-through ml-2">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 ${
                        product.inStock
                          ? 'bg-blue-600 hover:bg-blue-700 text-white'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                      disabled={!product.inStock}
                    >
                      <ShoppingCart size={16} />
                      {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      <Eye size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BrandProducts;
