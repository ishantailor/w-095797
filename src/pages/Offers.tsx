
import Layout from '@/components/Layout';
import { Tag, Gift, Clock, Star } from 'lucide-react';

const Offers = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            🎉 Special Offers & Deals
          </h1>
          <p className="text-xl md:text-2xl">
            Limited Time Offers - Don't Miss Out!
          </p>
        </div>
      </section>

      {/* Current Offers */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Current Offers</h2>
            <p className="text-lg text-gray-600">Grab these amazing deals before they expire!</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Offer 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-lg border border-blue-200">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  LIMITED TIME
                </span>
                <Gift className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                FREE Gaming Mouse
              </h3>
              <p className="text-gray-600 mb-4">
                Buy a Gaming PC above ₹25,000 and get a FREE Gaming Mouse worth ₹2,000
              </p>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-sm text-gray-600">Minimum Purchase: <span className="font-semibold">₹25,000</span></p>
                <p className="text-sm text-gray-600">Free Gift: <span className="font-semibold">Gaming Mouse (₹2,000 value)</span></p>
              </div>
              <div className="flex items-center text-orange-600">
                <Clock className="w-4 h-4 mr-2" />
                <span className="text-sm font-semibold">Offer valid till end of month</span>
              </div>
            </div>

            {/* Offer 2 */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl shadow-lg border border-green-200">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  HOT DEAL
                </span>
                <Tag className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                HP Laptop i5 Special
              </h3>
              <p className="text-gray-600 mb-4">
                Refurbished HP Laptop with Intel i5 processor - Limited stock available!
              </p>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-3xl font-bold text-green-600">₹16,999</p>
                <p className="text-sm text-gray-500 line-through">₹22,000</p>
                <p className="text-sm text-green-600 font-semibold">Save ₹5,001!</p>
              </div>
              <div className="flex items-center text-orange-600">
                <Clock className="w-4 h-4 mr-2" />
                <span className="text-sm font-semibold">Only 5 units left!</span>
              </div>
            </div>

            {/* Offer 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl shadow-lg border border-purple-200">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  COMBO DEAL
                </span>
                <Star className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Monitor + CPU Combo
              </h3>
              <p className="text-gray-600 mb-4">
                Complete desktop setup with monitor and CPU - Perfect for office work
              </p>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-3xl font-bold text-purple-600">₹20,000</p>
                <p className="text-sm text-gray-500">Monitor + CPU + Keyboard + Mouse</p>
                <p className="text-sm text-purple-600 font-semibold">Complete Setup!</p>
              </div>
              <div className="flex items-center text-orange-600">
                <Clock className="w-4 h-4 mr-2" />
                <span className="text-sm font-semibold">Best value combo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Offers */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">More Great Deals</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">Student Discount</h3>
              <p className="text-gray-600 mb-4">
                Students get 5% additional discount on all laptop purchases. 
                Just show your valid student ID!
              </p>
              <div className="text-sm text-gray-500">
                *Valid student ID required. Cannot be combined with other offers.
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-green-600">Trade-In Program</h3>
              <p className="text-gray-600 mb-4">
                Get up to ₹5,000 off when you trade in your old laptop or PC 
                while purchasing a new one.
              </p>
              <div className="text-sm text-gray-500">
                *Trade-in value depends on device condition and model.
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-orange-600">Bulk Purchase Discount</h3>
              <p className="text-gray-600 mb-4">
                Special pricing for offices and institutions purchasing 5+ units. 
                Contact us for custom quotes.
              </p>
              <div className="text-sm text-gray-500">
                *Minimum 5 units required. Custom warranty options available.
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-purple-600">Referral Bonus</h3>
              <p className="text-gray-600 mb-4">
                Refer a friend and both of you get ₹500 off on your next purchase 
                above ₹10,000.
              </p>
              <div className="text-sm text-gray-500">
                *Both customers must make a purchase for offer to be valid.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Save Big?</h2>
          <p className="text-xl mb-8">
            Visit our store or call us now to take advantage of these limited-time offers!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+91-XXXXXXXXXX"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call Now: +91-XXXXXXXXXX
            </a>
            <a
              href="#"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Visit Store
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Offers;
