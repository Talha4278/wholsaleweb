import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    inquiryType: 'general'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Company Address',
      details: [
        'TradePro Distribution Ltd',
        '123 Business Park Drive',
        'London, UK SW1A 1AA'
      ]
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: [
        'info@tradepro.uk',
        'partnerships@tradepro.uk',
        'support@tradepro.uk'
      ]
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: [
        '+44 20 1234 5678',
        '+44 20 1234 5679 (Sales)',
        '+44 20 1234 5680 (Support)'
      ]
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: [
        'Monday - Friday: 9:00 AM - 6:00 PM',
        'Saturday: 9:00 AM - 2:00 PM',
        'Sunday: Closed'
      ]
    }
  ];

  return (
    <section id="contact" className="pt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Contact TradePro
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're available to answer any questions you have and to explore partnership opportunities. 
            Get in touch with us today and discover how we can help grow your business together.
          </p>
        </div>

        {/* Contact Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <info.icon className="text-blue-600" size={28} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{info.title}</h3>
              <div className="space-y-2">
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form and Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
            <p className="text-gray-600 mb-8">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
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
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                  Inquiry Type
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                >
                  <option value="general">General Inquiry</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="supplier">Become a Supplier</option>
                  <option value="support">Customer Support</option>
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
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                  placeholder="Tell us about your inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center group disabled:bg-green-600"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="mr-2" size={20} />
                    Message Sent Successfully!
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Company Information */}
          <div className="space-y-8">
            {/* Map Placeholder */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Location</h3>
              <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center mb-6">
                <div className="text-center">
                  <MapPin className="text-gray-400 mx-auto mb-2" size={48} />
                  <p className="text-gray-500">Interactive map would be here</p>
                  <p className="text-sm text-gray-400">London, UK - Central Business District</p>
                </div>
              </div>
              <div className="text-center">
                <p className="text-gray-600 mb-2">We're conveniently located in the heart of London's business district.</p>
                <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300">
                  Get Directions →
                </button>
              </div>
            </div>

            {/* Additional Information */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose TradePro?</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-700">UK registered company with full trade certifications</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-700">Specialized expertise in Amazon FBA operations</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-700">Partnerships with authorized distributors only</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-700">Proven track record across multiple product categories</span>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
              <h4 className="font-semibold text-gray-900 mb-2">Quick Response Guarantee</h4>
              <p className="text-gray-600">
                We pride ourselves on prompt communication. Expect a response to your inquiry 
                within 24 hours during business days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;