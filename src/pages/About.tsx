
import Layout from '@/components/Layout';
import { Shield, Clock, Users, Award } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            About Hari Om Infotech
          </h1>
          <p className="text-xl md:text-2xl">
            Your Trusted IT Hardware Partner in Surat
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Hari Om Infotech is your one-stop destination for all IT hardware needs in Surat. 
              Since our founding, we have delivered powerful PC builds, quality refurbished laptops, 
              and trusted support services to customers across Gujarat. We believe in providing 
              technology solutions that empower our customers to achieve their goals, whether 
              it's gaming, business, or personal computing.
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Genuine Products</h3>
              <p className="text-gray-600">
                All our products are 100% genuine with proper warranties and certifications.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Transparent Pricing</h3>
              <p className="text-gray-600">
                No hidden costs. Clear, upfront pricing for all products and services.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Service & Support</h3>
              <p className="text-gray-600">
                Quick turnaround times for repairs and prompt customer support.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Custom PC Build Guidance</h3>
              <p className="text-gray-600">
                Expert advice to help you build the perfect PC for your specific needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-blue-600 mb-2">1000+</h3>
              <p className="text-xl text-gray-600">Happy Customers</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-green-600 mb-2">5000+</h3>
              <p className="text-xl text-gray-600">PCs Built</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-orange-600 mb-2">500+</h3>
              <p className="text-xl text-gray-600">Repairs Completed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide high-quality, affordable IT solutions that meet the diverse needs 
                of our customers. We strive to be the most trusted technology partner in Surat, 
                offering personalized service and expert guidance to help our customers make 
                informed decisions about their technology investments.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become the leading IT hardware destination in Gujarat, known for our 
                exceptional customer service, competitive pricing, and commitment to quality. 
                We envision a future where technology is accessible to everyone, and we play 
                a key role in bridging that gap.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
