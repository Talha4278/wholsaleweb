import React from 'react';
import { Users, Handshake, TrendingUp, Mail, CheckCircle, ArrowRight, Award, Globe } from 'lucide-react';

const SuppliersPage: React.FC = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Market Expansion',
      description: 'Access new markets and customers through our established distribution network and Amazon FBA expertise.'
    },
    {
      icon: Award,
      title: 'Quality Partnership',
      description: 'Join a network of premium brands and authorized distributors committed to excellence and authenticity.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Leverage our international presence to expand your brand across multiple countries and regions.'
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: 'Receive personalized support from our experienced team throughout the entire partnership journey.'
    }
  ];

  const requirements = [
    'Authorized distributor or brand owner status',
    'High-quality products with proper certifications',
    'Compliance with international trade regulations',
    'Commitment to long-term partnership',
    'Reliable supply chain and inventory management',
    'Competitive pricing and terms'
  ];

  const process = [
    {
      step: '01',
      title: 'Initial Contact',
      description: 'Reach out to us with information about your products and business.'
    },
    {
      step: '02',
      title: 'Evaluation',
      description: 'We review your products, certifications, and business credentials.'
    },
    {
      step: '03',
      title: 'Partnership Agreement',
      description: 'Negotiate terms and establish a mutually beneficial partnership.'
    },
    {
      step: '04',
      title: 'Launch & Growth',
      description: 'Begin distribution and work together to expand market presence.'
    }
  ];

  return (
    <section id="suppliers" className="pt-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Become a Supplier Partner
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We are always looking to build long-term, mutually beneficial partnerships with 
            authorized distributors and brand owners. If you're interested in collaborating 
            with a trusted sourcing and distribution partner, we would love to hear from you.
          </p>
        </div>

        {/* Partnership Benefits */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Why Partner With Us
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join our network of successful partners and unlock new opportunities for growth and expansion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-50 rounded-xl mb-6 group-hover:bg-blue-100 transition-colors duration-300">
                  <benefit.icon className="text-blue-600" size={36} />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h4>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Requirements & Process */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Requirements */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Partnership Requirements
            </h3>
            <p className="text-gray-600 mb-8">
              To ensure the highest quality standards and mutual success, we look for partners who meet these criteria:
            </p>
            
            <div className="space-y-4">
              {requirements.map((requirement, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-700">{requirement}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Partnership Process
            </h3>
            <p className="text-gray-600 mb-8">
              Our streamlined process ensures efficient evaluation and onboarding of new partners:
            </p>

            <div className="space-y-6">
              {process.map((step, index) => (
                <div key={index} className="flex items-start group">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold mr-4 group-hover:bg-blue-700 transition-colors duration-300">
                    {step.step}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h4>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Ready to Start Your Partnership Journey?
            </h3>
            <p className="text-lg mb-8 opacity-90">
              Contact us today to start a conversation about how we can work together to achieve 
              mutual success and expand your market reach.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center bg-white bg-opacity-20 rounded-lg px-6 py-3">
                <Mail className="mr-3" size={20} />
                <span className="font-semibold">partnerships@tradepro.uk</span>
              </div>
              
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300 flex items-center group">
                Send Partnership Inquiry
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </button>
            </div>
            
            <p className="text-sm mt-6 opacity-75">
              We typically respond to partnership inquiries within 24-48 hours.
            </p>
          </div>
        </div>

        {/* Success Stories Preview */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Join Our Success Stories
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Our partners have achieved remarkable growth through our distribution network. 
            Discover how we can help expand your brand's reach and success.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">150%</div>
              <div className="text-gray-600">Average sales growth</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Countries reached</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Partner satisfaction rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuppliersPage;