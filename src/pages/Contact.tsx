
import Layout from '@/components/Layout';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            📞 Get In Touch
          </h1>
          <p className="text-xl md:text-2xl">
            We're Here to Help You Find the Perfect Tech Solution
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+91-XXXXXXXXXX"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="gaming-pc">Gaming PC Build</option>
                    <option value="laptop-purchase">Laptop Purchase</option>
                    <option value="repair-service">Repair Service</option>
                    <option value="accessories">Accessories & Components</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your requirements, budget, or any questions you have..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Details */}
            <div className="space-y-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">Our Location</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  📍 XYZ Road, Surat, Gujarat – 395XXX
                </p>
                <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">🌐 Google Maps Location</p>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Phone className="w-6 h-6 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">Phone & WhatsApp</h3>
                </div>
                <p className="text-gray-600 mb-2">
                  📞 <a href="tel:+91-XXXXXXXXXX" className="text-blue-600 hover:underline">+91-XXXXXXXXXX</a>
                </p>
                <p className="text-sm text-gray-500">
                  Call us for immediate assistance or product inquiries
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Mail className="w-6 h-6 text-purple-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">Email</h3>
                </div>
                <p className="text-gray-600 mb-2">
                  📧 <a href="mailto:hariominfotech@email.com" className="text-blue-600 hover:underline">hariominfotech@email.com</a>
                </p>
                <p className="text-sm text-gray-500">
                  Send us detailed requirements for custom quotes
                </p>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 text-orange-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">Business Hours</h3>
                </div>
                <div className="space-y-2 text-gray-600">
                  <p>🕒 Monday - Saturday: 10:00 AM to 8:00 PM</p>
                  <p>🚪 Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Do you provide warranty on custom PC builds?</h3>
              <p className="text-gray-600">Yes, we provide 1-year warranty on all custom PC builds and 6 months warranty on refurbished laptops.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Can I get a custom quote for bulk purchases?</h3>
              <p className="text-gray-600">Absolutely! We offer special pricing for bulk orders. Contact us with your requirements for a detailed quote.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Do you offer home delivery?</h3>
              <p className="text-gray-600">Yes, we provide home delivery within Surat city limits. Delivery charges may apply based on distance.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">We accept cash, UPI, bank transfers, and all major credit/debit cards.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
