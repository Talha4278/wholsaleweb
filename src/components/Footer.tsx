import React from 'react';
import { Mail, Phone, MapPin, Globe, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Product Categories', href: '#categories' },
    { label: 'Become a Supplier', href: '#suppliers' },
    { label: 'Contact', href: '#contact' }
  ];

  const categories = [
    'Health & Wellness',
    'Beauty & Personal Care', 
    'Household Cleaning',
    'Grocery',
    'Tools & DIY',
    'Office Supplies'
  ];

  const handleLinkClick = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="bg-blue-700 text-white px-4 py-2 rounded-lg font-bold text-xl mb-6 inline-block">
              TradePro
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted UK-based wholesale and retail distribution partner, 
              specializing in Amazon FBA operations across multiple product categories.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <MapPin className="mr-3 flex-shrink-0" size={16} />
                <span className="text-sm">London, UK</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="mr-3 flex-shrink-0" size={16} />
                <span className="text-sm">info@tradepro.uk</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="mr-3 flex-shrink-0" size={16} />
                <span className="text-sm">+44 20 1234 5678</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Product Categories</h3>
            <ul className="space-y-3">
              {categories.map((category, index) => (
                <li key={index}>
                  <span className="text-gray-300 text-sm hover:text-white transition-colors duration-300 cursor-pointer">
                    {category}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Information */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Business Information</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-white font-medium mb-2">Specializations</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>Amazon FBA Operations</li>
                  <li>Wholesale Distribution</li>
                  <li>Product Sourcing</li>
                  <li>Brand Partnerships</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-white font-medium mb-2">Certifications</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>UK Company Registration</li>
                  <li>Import/Export License</li>
                  <li>Quality Assurance Standards</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Additional Info */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <div className="flex items-center text-gray-300">
                <Globe className="mr-2" size={16} />
                <span className="text-sm">Serving customers worldwide</span>
              </div>
              
              {/* Social Media Links */}
              <div className="flex items-center space-x-4">
                <button className="text-gray-300 hover:text-white transition-colors duration-300">
                  <Linkedin size={20} />
                </button>
                <button className="text-gray-300 hover:text-white transition-colors duration-300">
                  <Twitter size={20} />
                </button>
              </div>
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm mb-2">
                Trusted by brands and distributors across 6 major categories
              </p>
              <p className="text-gray-500 text-xs">
                © {currentYear} QASIM ALI BAKSH  Ltd. All rights reserved.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Footer Note */}
        <div className="mt-8 pt-6 border-t border-gray-800">
          <div className="text-center">
            <p className="text-gray-400 text-sm max-w-4xl mx-auto">
              <strong>Partnership Notice:</strong> We partner exclusively with authorized distributors and brand owners 
              to ensure product authenticity and quality. All business relationships are built on trust, compliance, 
              and mutual success in expanding market reach through our specialized Amazon FBA expertise.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;