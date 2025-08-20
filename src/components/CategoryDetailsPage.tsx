import React, { useEffect, useMemo } from 'react';
import { Heart, Sparkles, SprayCan as Spray, ShoppingCart, Wrench, FileText, ArrowLeft, CheckCircle, Star, Users, Award, Globe } from 'lucide-react';

interface CategoryDetailsPageProps {
  onBack: () => void;
  onContactUs: () => void;
  targetSlug?: string;
}

const CategoryDetailsPage: React.FC<CategoryDetailsPageProps> = ({ onBack, onContactUs, targetSlug }) => {
  const categories = [
    {
      icon: Heart,
      slug: 'health-wellness',
      name: 'Health & Wellness',
      description: 'Explore a comprehensive range of wellness products designed to support both physical and mental health across all age groups.',
      detailedDescription: 'Our Health & Wellness category encompasses a wide variety of products from trusted brands and authorized distributors. We focus on products that promote overall well-being, from daily supplements to specialized health equipment. All products undergo rigorous quality checks and comply with UK health regulations.',
      details: [
        'Vitamins & Supplements - Daily nutrition and specialized health supplements',
        'Fitness Equipment - Home gym essentials and professional-grade equipment',
        'Personal Healthcare - Medical devices and personal health monitoring tools',
        'Mental Wellness Products - Stress relief, aromatherapy, and relaxation aids',
        'Natural Health Solutions - Organic and natural health products'
      ],
      features: [
        'FDA/MHRA approved products',
        'Certified organic options available',
        'Bulk wholesale pricing',
        'White-label opportunities',
        'Dropshipping support for Amazon FBA'
      ],
      targetMarket: 'Health stores, online retailers, fitness centers, wellness clinics',
      color: 'from-green-400 to-green-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
      image: '/img/Gemini_Generated_Image_yvt5tvyvt5tvyvt5.jpg'
    },
    {
      icon: Sparkles,
      slug: 'beauty-personal-care',
      name: 'Beauty & Personal Care',
      description: 'High-quality beauty and personal care products for every need, preference, and skin type from premium international brands.',
      detailedDescription: 'Our beauty collection features products from established brands and emerging innovators in the beauty industry. We source directly from manufacturers and authorized distributors, ensuring authentic products with proper certifications. Perfect for retailers looking to expand their beauty offerings.',
      details: [
        'Skincare Products - Anti-aging, moisturizers, cleansers, and treatments',
        'Cosmetics & Makeup - Foundation, lipsticks, eyeshadow, and tools',
        'Hair Care Solutions - Shampoos, conditioners, styling products, and treatments',
        'Personal Hygiene - Deodorants, body washes, and oral care products',
        'Premium Beauty Brands - Luxury and high-end beauty collections'
      ],
      features: [
        'Cruelty-free certified products',
        'Vegan and organic options',
        'Trending and viral products',
        'Private label manufacturing',
        'Seasonal collections available'
      ],
      targetMarket: 'Beauty stores, salons, online beauty retailers, department stores',
      color: 'from-pink-400 to-pink-600',
      bgColor: 'bg-pink-50',
      iconColor: 'text-pink-600',
      image: '/img/Gemini_Generated_Image_u62qrnu62qrnu62q.jpg'
    },
    {
      icon: Spray,
      slug: 'household-cleaning',
      name: 'Household Cleaning',
      description: 'Safe, effective, and eco-friendly cleaning solutions for a cleaner, healthier home environment.',
      detailedDescription: 'Our household cleaning range includes both traditional and innovative eco-friendly solutions. We partner with manufacturers who prioritize safety and environmental responsibility while maintaining cleaning effectiveness. Perfect for retailers focusing on sustainable living products.',
      details: [
        'All-Purpose Cleaners - Multi-surface cleaners for various household needs',
        'Eco-Friendly Solutions - Biodegradable and environmentally safe options',
        'Kitchen & Bathroom - Specialized cleaners for specific areas',
        'Laundry Products - Detergents, fabric softeners, and stain removers',
        'Specialized Cleaners - Glass, wood, metal, and upholstery cleaners'
      ],
      features: [
        'EPA certified safe products',
        'Concentrate options for shipping efficiency',
        'Refillable packaging solutions',
        'Bulk commercial sizing',
        'Child-safe formulations'
      ],
      targetMarket: 'Supermarkets, hardware stores, cleaning services, eco-conscious retailers',
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      image: '/img/Gemini_Generated_Image_7md7hl7md7hl7md7.jpg'
    },
    {
      icon: ShoppingCart,
      slug: 'grocery',
      name: 'Grocery',
      description: 'A carefully curated selection of essential grocery products for everyday needs and specialty dietary requirements.',
      detailedDescription: 'Our grocery category focuses on non-perishable and specialty food items that are perfect for e-commerce and Amazon FBA. We work with food manufacturers and distributors who meet strict quality and safety standards, offering products with good shelf life and strong market demand.',
      details: [
        'Packaged Foods - Snacks, canned goods, pasta, rice, and cereals',
        'Beverages - Soft drinks, juices, energy drinks, and specialty teas',
        'Snacks & Confectionery - Healthy snacks, chocolates, and treats',
        'Specialty Items - Gluten-free, keto, vegan, and organic options',
        'International Products - Authentic global cuisine ingredients'
      ],
      features: [
        'Long shelf-life products ideal for FBA',
        'Trending health and diet products',
        'Bulk packaging options',
        'Seasonal and holiday items',
        'Private label opportunities'
      ],
      targetMarket: 'Online grocery stores, specialty food retailers, subscription box services',
      color: 'from-orange-400 to-orange-600',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600',
      image: '/img/Gemini_Generated_Image_s32mbrs32mbrs32m.jpg'
    },
    {
      icon: Wrench,
      slug: 'tools-diy',
      name: 'Tools & DIY',
      description: 'Professional-grade tools and DIY essentials for all your home improvement and construction projects.',
      detailedDescription: 'Our tools and DIY category features products from reputable manufacturers known for durability and reliability. Whether you\'re supplying professional contractors or DIY enthusiasts, we offer a comprehensive range of tools and hardware that meet industry standards.',
      details: [
        'Hand Tools - Hammers, screwdrivers, pliers, wrenches, and measuring tools',
        'Power Tools - Drills, saws, sanders, and other electric tools',
        'Hardware & Fasteners - Screws, bolts, nuts, hinges, and mounting hardware',
        'Garden Tools - Pruning shears, shovels, hoses, and lawn care equipment',
        'Safety Equipment - Protective gear, first aid kits, and safety accessories'
      ],
      features: [
        'Professional and consumer grades available',
        'Warranty support included',
        'Bulk contractor pricing',
        'Seasonal gardening collections',
        'Tool sets and starter kits'
      ],
      targetMarket: 'Hardware stores, construction suppliers, online tool retailers, trade professionals',
      color: 'from-gray-400 to-gray-600',
      bgColor: 'bg-gray-50',
      iconColor: 'text-gray-600',
      image: '/img/Gemini_Generated_Image_wy3ub6wy3ub6wy3u.jpg'
    },
    {
      icon: FileText,
      slug: 'office-supplies',
      name: 'Office Supplies',
      description: 'Comprehensive office products to help businesses and individuals maintain productivity and organization.',
      detailedDescription: 'Our office supplies range covers everything from basic stationery to advanced office technology. We understand the needs of modern businesses and remote workers, offering products that enhance productivity and maintain professional standards.',
      details: [
        'Stationery & Writing - Pens, pencils, paper, notebooks, and writing accessories',
        'Office Technology - Calculators, shredders, laminators, and desk accessories',
        'Filing & Organization - Folders, binders, storage solutions, and labeling systems',
        'Presentation Materials - Whiteboards, markers, projector accessories, and displays',
        'Business Essentials - Planners, calendars, business cards, and office furniture'
      ],
      features: [
        'Bulk business discounts',
        'Eco-friendly recycled options',
        'Corporate branding services',
        'Subscription box compatible items',
        'Back-to-school seasonal collections'
      ],
      targetMarket: 'Office supply stores, educational institutions, corporate buyers, online retailers',
      color: 'from-purple-400 to-purple-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
      image: '/img/Gemini_Generated_Image_cgck4gcgck4gcgck.jpg'
    }
  ];

  const targetIndex = useMemo(() => {
    if (!targetSlug) return 0;
    const idx = categories.findIndex(c => c.slug === targetSlug);
    return idx === -1 ? 0 : idx;
  }, [targetSlug]);

  useEffect(() => {
    // Scroll to the specific category section on mount
    const element = document.getElementById(`category-${targetIndex}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [targetIndex]);

  const stats = [
    { icon: Users, value: '500+', label: 'Active Products', description: 'Across all categories' },
    { icon: Globe, value: '15+', label: 'Countries Served', description: 'Worldwide shipping' },
    { icon: Award, value: '99%', label: 'Quality Rating', description: 'Customer satisfaction' },
    { icon: Star, value: '24/7', label: 'Support Available', description: 'Customer service' },
  ];

  return (
    <section className="bg-gray-50 min-h-screen">
      {/* Fixed Back Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <button 
            onClick={onBack}
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-300"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Main Page
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20">
        {/* Header */}
        <div className="mb-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Complete Category Guide
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Explore our comprehensive product categories with detailed information about what we offer, 
              our quality standards, and partnership opportunities in each sector.
            </p>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center group hover:shadow-xl transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                <stat.icon className="text-blue-600" size={24} />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm font-semibold text-gray-700 mb-1">{stat.label}</div>
              <div className="text-xs text-gray-500">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Detailed Categories */}
        <div className="space-y-12">
          {categories.map((category, index) => (
            <div 
              key={index} 
              id={`category-${index}`}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative h-80 lg:h-auto">
                  <img 
                    src={category.image} 
                    alt={`${category.name} products`}
                    className="w-full h-full object-cover"
                  />
                  {/* Category Header */}
                  <div className={`absolute top-0 left-0 right-0 bg-gradient-to-r ${category.color} p-4`}>
                    <div className="flex items-center text-white">
                      <div className="bg-white bg-opacity-20 p-3 rounded-xl mr-4">
                        <category.icon size={24} />
                      </div>
                      <h2 className="text-xl font-bold">{category.name}</h2>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 lg:p-12">
                  <div className="h-full flex flex-col">
                    {/* Detailed Description */}
                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">About This Category</h3>
                      <p className="text-gray-600 leading-relaxed">
                        {category.detailedDescription}
                      </p>
                    </div>

                    {/* Product Details */}
                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Product Range</h3>
                      <div className="space-y-3">
                        {category.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start">
                            <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={16} />
                            <span className="text-gray-700 text-sm">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
                      <div className="grid grid-cols-1 gap-2">
                        {category.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center">
                            <Star className="text-yellow-500 mr-2 flex-shrink-0" size={14} />
                            <span className="text-gray-600 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Target Market */}
                    <div className={`${category.bgColor} p-4 rounded-lg mb-6`}>
                      <h4 className="font-semibold text-gray-900 mb-2">Target Market</h4>
                      <p className={`text-sm ${category.iconColor}`}>{category.targetMarket}</p>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-auto">
                      <button 
                        onClick={onContactUs}
                        className={`w-full bg-gradient-to-r ${category.color} text-white py-4 px-6 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
                      >
                        Get Partnership Info for {category.name}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Partnership?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join hundreds of successful retailers who trust TradePro for their product sourcing needs. 
            Get started with a consultation today.
          </p>
          <button 
            onClick={onContactUs}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors duration-300 inline-flex items-center"
          >
            Contact Us Today
            <ArrowLeft className="ml-2 rotate-180" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategoryDetailsPage;
