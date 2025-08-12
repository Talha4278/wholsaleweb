import React from 'react';
import { Heart, Sparkles, SprayCan as Spray, ShoppingCart, Wrench, FileText, ArrowRight, CheckCircle, Users, Globe, Award } from 'lucide-react';

const HomePage: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const categories = [
    { icon: Heart, name: 'Health & Wellness', color: 'text-green-600' },
    { icon: Sparkles, name: 'Beauty & Personal Care', color: 'text-pink-600' },
    { icon: Spray, name: 'Household Cleaning', color: 'text-blue-600' },
    { icon: ShoppingCart, name: 'Grocery', color: 'text-orange-600' },
    { icon: Wrench, name: 'Tools & DIY', color: 'text-gray-600' },
    { icon: FileText, name: 'Office Supplies', color: 'text-purple-600' },
  ];

  const stats = [
    { icon: Users, value: '500+', label: 'Trusted Partners' },
    { icon: Globe, value: '15+', label: 'Countries Served' },
    { icon: Award, value: '99%', label: 'Quality Approval Rate' },
  ];

  return (
    <section id="home" className="pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Trusted Products Sourcing & Distribution Partner
              </h1>
              <p className="text-xl md:text-2xl text-blue-700 font-semibold mb-8">
                UK Registered & Amazon FBA Specialist
              </p>
              <p className="text-lg text-gray-600 mb-10">
                We are your reliable partner for sourcing and distributing high-quality products 
                across multiple categories. With extensive experience in Amazon FBA operations, 
                we ensure swift and efficient delivery to customers worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => scrollToSection('categories')}
                  className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-800 transition-colors duration-300 flex items-center justify-center group"
                >
                  Explore Categories
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                </button>
                <button
                  onClick={() => scrollToSection('suppliers')}
                  className="border-2 border-blue-700 text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 hover:text-white transition-colors duration-300"
                >
                  Become a Partner
                </button>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="/img/Gemini_Generated_Image_h3neluh3neluh3ne.jpg" 
                  alt="Wholesale Distribution - Products and Logistics" 
                  className="w-full h-96 lg:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                />
                {/* Overlay for better visual appeal */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <span className="text-sm font-semibold text-blue-700">UK Registered</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                  <stat.icon className="text-blue-700" size={32} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Categories Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Product Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We specialize in sourcing and distributing products across multiple categories, 
              ensuring quality and authenticity in every partnership.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-1">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-50 rounded-full mb-6 group-hover:bg-gray-100 transition-colors duration-300">
                  <category.icon className={`${category.color}`} size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  High-quality products from authorized distributors and brand owners.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose QASIM ALI BAKSH LTD
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We build long-term relationships based on trust, quality, and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6 group-hover:bg-green-200 transition-colors duration-300">
                <CheckCircle className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Authorized Partners Only</h3>
              <p className="text-gray-600">
                We work exclusively with authorized distributors and brand owners, 
                ensuring authenticity and quality in every product.
              </p>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                <Globe className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Amazon FBA Expertise</h3>
              <p className="text-gray-600">
                Specialized knowledge in Amazon FBA operations ensures swift 
                and efficient delivery to customers worldwide.
              </p>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6 group-hover:bg-purple-200 transition-colors duration-300">
                <Award className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">UK Registered & Compliant</h3>
              <p className="text-gray-600">
                Fully registered UK company with all necessary certifications 
                and compliance standards for international trade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;