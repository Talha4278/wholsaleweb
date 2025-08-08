import React from 'react';
import { Heart, Sparkles, SprayCan as Spray, ShoppingCart, Wrench, FileText, ArrowRight, CheckCircle } from 'lucide-react';

const CategoriesPage: React.FC = () => {
  const categories = [
    {
      icon: Heart,
      name: 'Health & Wellness',
      description: 'Explore a wide range of wellness products designed to support physical and mental health.',
      details: [
        'Vitamins & Supplements',
        'Fitness Equipment',
        'Personal Healthcare',
        'Mental Wellness Products',
        'Natural Health Solutions'
      ],
      color: 'from-green-400 to-green-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      icon: Sparkles,
      name: 'Beauty & Personal Care',
      description: 'High-quality beauty and personal care products for every need and preference.',
      details: [
        'Skincare Products',
        'Cosmetics & Makeup',
        'Hair Care Solutions',
        'Personal Hygiene',
        'Premium Beauty Brands'
      ],
      color: 'from-pink-400 to-pink-600',
      bgColor: 'bg-pink-50',
      iconColor: 'text-pink-600'
    },
    {
      icon: Spray,
      name: 'Household Cleaning',
      description: 'Safe and effective cleaning solutions for a cleaner, healthier home.',
      details: [
        'All-Purpose Cleaners',
        'Eco-Friendly Solutions',
        'Kitchen & Bathroom',
        'Laundry Products',
        'Specialized Cleaners'
      ],
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: ShoppingCart,
      name: 'Grocery',
      description: 'A selection of essential grocery products for everyday needs.',
      details: [
        'Packaged Foods',
        'Beverages',
        'Snacks & Confectionery',
        'Specialty Items',
        'International Products'
      ],
      color: 'from-orange-400 to-orange-600',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600'
    },
    {
      icon: Wrench,
      name: 'Tools & DIY',
      description: 'Top-tier tools and DIY essentials for all your home improvement projects.',
      details: [
        'Hand Tools',
        'Power Tools',
        'Hardware & Fasteners',
        'Garden Tools',
        'Safety Equipment'
      ],
      color: 'from-gray-400 to-gray-600',
      bgColor: 'bg-gray-50',
      iconColor: 'text-gray-600'
    },
    {
      icon: FileText,
      name: 'Office Supplies',
      description: 'Reliable office products to help businesses and individuals stay productive.',
      details: [
        'Stationery & Writing',
        'Office Technology',
        'Filing & Organization',
        'Presentation Materials',
        'Business Essentials'
      ],
      color: 'from-purple-400 to-purple-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    }
  ];

  return (
    <section id="categories" className="pt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Product Categories
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We specialize in sourcing and distributing high-quality products across six major categories. 
            Each category is carefully curated to ensure we work only with authorized distributors and 
            brand owners, guaranteeing authenticity and quality.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-1"
            >
              <div className={`bg-gradient-to-r ${category.color} p-6`}>
                <div className="flex items-center text-white">
                  <div className="bg-white bg-opacity-20 p-4 rounded-xl mr-6">
                    <category.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold">{category.name}</h3>
                </div>
              </div>
              
              <div className="p-8">
                <p className="text-gray-600 leading-relaxed mb-6">
                  {category.description}
                </p>
                
                <div className="space-y-3 mb-8">
                  {category.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={16} />
                      <span className="text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>
                
                <button className={`inline-flex items-center px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${category.bgColor} ${category.iconColor} hover:shadow-md group-hover:translate-x-1`}>
                  Learn More
                  <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Assurance Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Quality Assurance Across All Categories
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Regardless of category, every product we source meets our rigorous standards for quality, 
              authenticity, and compliance with relevant regulations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-blue-600" size={28} />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Authorized Sources</h4>
              <p className="text-gray-600">All products sourced directly from authorized distributors and brand owners.</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-green-600" size={28} />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Quality Verification</h4>
              <p className="text-gray-600">Rigorous quality checks ensure all products meet highest standards.</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-purple-600" size={28} />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Compliance Ready</h4>
              <p className="text-gray-600">All products comply with relevant regulations and market requirements.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesPage;