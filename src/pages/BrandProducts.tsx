
import Layout from '@/components/Layout';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Star, ShoppingCart, Eye } from 'lucide-react';

const BrandProducts = () => {
  const { category, brand } = useParams();

  // Sample product data - in a real app, this would come from an API
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
          },
          {
            id: 'hp-omen-15',
            name: 'HP OMEN 15 Gaming',
            price: '₹85,000',
            originalPrice: '₹90,000',
            image: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=400&h=300&fit=crop',
            specs: ['Intel Core i7', '16GB RAM', '512GB SSD', 'RTX 3060'],
            rating: 4.7,
            inStock: false
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
