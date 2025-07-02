
import Layout from '@/components/Layout';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const ProductCategory = () => {
  const { category } = useParams();

  // Brand data for each category
  const categoryData = {
    laptops: {
      name: 'Laptops',
      description: 'Choose from top laptop brands for gaming, business, and personal use',
      brands: [
        { id: 'hp', name: 'HP', logo: 'https://images.unsplash.com/photo-1611078489935-0cb964de46d6?w=200&h=100&fit=crop' },
        { id: 'dell', name: 'Dell', logo: 'https://images.unsplash.com/photo-1588702547923-7ac5ac7fb46c?w=200&h=100&fit=crop' },
        { id: 'lenovo', name: 'Lenovo', logo: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=200&h=100&fit=crop' },
        { id: 'asus', name: 'ASUS', logo: 'https://images.unsplash.com/photo-1541807084-5b52b6ee0547?w=200&h=100&fit=crop' },
        { id: 'acer', name: 'Acer', logo: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=200&h=100&fit=crop' },
        { id: 'msi', name: 'MSI', logo: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=200&h=100&fit=crop' },
        { id: 'apple', name: 'Apple', logo: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=200&h=100&fit=crop' }
      ]
    },
    desktops: {
      name: 'Desktop PCs',
      description: 'Custom built desktop PCs and branded systems',
      brands: [
        { id: 'custom', name: 'Custom Build', logo: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=200&h=100&fit=crop' },
        { id: 'hp', name: 'HP', logo: 'https://images.unsplash.com/photo-1611078489935-0cb964de46d6?w=200&h=100&fit=crop' },
        { id: 'dell', name: 'Dell', logo: 'https://images.unsplash.com/photo-1588702547923-7ac5ac7fb46c?w=200&h=100&fit=crop' },
        { id: 'asus', name: 'ASUS', logo: 'https://images.unsplash.com/photo-1541807084-5b52b6ee0547?w=200&h=100&fit=crop' },
        { id: 'msi', name: 'MSI', logo: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=200&h=100&fit=crop' }
      ]
    },
    components: {
      name: 'Computer Components',
      description: 'High-quality components for building and upgrading PCs',
      brands: [
        { id: 'intel', name: 'Intel', logo: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=200&h=100&fit=crop' },
        { id: 'amd', name: 'AMD', logo: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=200&h=100&fit=crop' },
        { id: 'nvidia', name: 'NVIDIA', logo: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=200&h=100&fit=crop' },
        { id: 'corsair', name: 'Corsair', logo: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=200&h=100&fit=crop' },
        { id: 'gskill', name: 'G.Skill', logo: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=200&h=100&fit=crop' },
        { id: 'asus', name: 'ASUS', logo: 'https://images.unsplash.com/photo-1541807084-5b52b6ee0547?w=200&h=100&fit=crop' }
      ]
    }
  };

  const currentCategory = categoryData[category as keyof typeof categoryData];

  if (!currentCategory) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Category Not Found</h1>
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
          <Link 
            to="/products" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Categories
          </Link>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{currentCategory.name}</h1>
          <p className="text-xl text-gray-600">{currentCategory.description}</p>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Brand</h2>
            <p className="text-lg text-gray-600">Select a brand to view available products</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentCategory.brands.map((brand) => (
              <Link
                key={brand.id}
                to={`/products/${category}/${brand.id}`}
                className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-32 overflow-hidden bg-gray-50 flex items-center justify-center">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-w-full max-h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {brand.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductCategory;
