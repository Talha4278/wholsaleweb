import React from 'react';
import { Shield, Target, Handshake, Award, Globe2, TrendingUp } from 'lucide-react';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'We ensure that all products meet the highest standards of quality and authenticity through rigorous vetting processes.'
    },
    {
      icon: Handshake,
      title: 'Partnership Focus',
      description: 'Building long-term, mutually beneficial relationships with authorized distributors and brand owners is our priority.'
    },
    {
      icon: Globe2,
      title: 'Global Reach',
      description: 'With extensive experience in international trade, we help brands reach customers across multiple markets efficiently.'
    }
  ];

  const achievements = [
    { icon: Award, title: '5+ Years Experience', description: 'Proven track record in wholesale and retail distribution' },
    { icon: TrendingUp, title: '99% Success Rate', description: 'Outstanding performance in Amazon FBA operations' },
    { icon: Shield, title: 'Fully Compliant', description: 'UK registered with all necessary trade certifications' },
  ];

  return (
    <section id="about" className="pt-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            About QAB
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We are a UK-based wholesale and retail distribution company with extensive experience 
              in sourcing and supplying products across multiple categories. We specialize in Amazon FBA 
              wholesale operations, ensuring that products reach their customers swiftly and efficiently.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
            <div className="flex items-center mb-6">
              <div className="bg-blue-600 p-3 rounded-lg mr-4">
                <Target className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to build long-term relationships with authorized distributors and brand owners, 
              providing only high-quality, legitimate products to the market. We strive to be the most 
              trusted partner in product sourcing and distribution.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
            <div className="flex items-center mb-6">
              <div className="bg-green-600 p-3 rounded-lg mr-4">
                <Handshake className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Business Philosophy</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              By partnering exclusively with authorized distributors and brand owners, we ensure that 
              all products meet the highest standards of quality and authenticity. This approach 
              builds trust and credibility across all market niches.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and define how we build lasting partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-50 rounded-full mb-6 group-hover:bg-blue-50 transition-colors duration-300">
                  <value.icon className="text-blue-600 group-hover:text-blue-700" size={36} />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Track Record
            </h3>
            <p className="text-lg text-gray-600">
              Proven results that demonstrate our commitment to excellence and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <achievement.icon className="text-blue-600" size={28} />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{achievement.title}</h4>
                <p className="text-gray-600 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Partner With Us?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our network of trusted partners and experience the difference that quality, 
            reliability, and expertise can make for your business.
          </p>
          <button
            onClick={() => {
              const cta = document.getElementById('suppliers-cta');
              if (cta) {
                cta.scrollIntoView({ behavior: 'smooth' });
              } else {
                const contact = document.getElementById('contact');
                if (contact) contact.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-800 transition-colors duration-300"
          >
            Get in Touch Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;