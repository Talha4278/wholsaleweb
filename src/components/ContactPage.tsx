import React from 'react';
import { Mail, Phone, MapPin, Clock, CheckCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
  // Contact form temporarily disabled

  const COMPANY_EMAIL = 'qasim@qabdistribution.co.uk';
  const COMPANY_PHONE = '+44 73 6026 2719';
  const COMPANY_ADDRESS = '167-169 Great Portland Street, London W1W 5PF, UK';

  const sanitizePhone = (phone: string) => phone.replace(/\s+/g, '');

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Company Address',
      details: [
        'QASIM ALI BAKSH Ltd',
        '167-169 Great portland street',
        'London, UK W1W5PF'
          
      ]
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: [
        COMPANY_EMAIL
      ]
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: [
        COMPANY_PHONE
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
            Contact QAB
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
                {info.details.map((detail, idx) => {
                  if (info.title === 'Email Addresses') {
                    return (
                      <a
                        key={idx}
                        href={`mailto:${detail}`}
                        className="text-blue-600 text-sm font-medium hover:underline"
                      >
                        {detail}
                      </a>
                    );
                  }
                  if (info.title === 'Phone Numbers') {
                    return (
                      <a
                        key={idx}
                        href={`tel:${sanitizePhone(detail)}`}
                        className="text-blue-600 text-sm font-medium hover:underline"
                      >
                        {detail}
                      </a>
                    );
                  }
                  return (
                    <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

          {/* Contact Form and Map Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Why Choose TradePro at top across both columns */}
            <div className="bg-white p-8 rounded-2xl shadow-lg lg:col-span-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose QAB?</h3>
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

            {/* Left column: Quick Contact card replaces the removed form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg h-fit">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Contact</h3>
              <p className="text-gray-600 mb-6">Prefer a quick action? Reach us instantly using any option below.</p>
              <div className="space-y-4">
                <a
                  href={`mailto:${COMPANY_EMAIL}?subject=${encodeURIComponent('General Inquiry')}`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  <Mail size={18} /> Email Us
                </a>
                <a
                  href={`tel:${sanitizePhone(COMPANY_PHONE)}`}
                  className="w-full inline-flex items-center justify-center gap-2 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  <Phone size={18} /> Call Us
                </a>
              </div>
              <div className="mt-6 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-semibold text-gray-900 mb-1">Quick Response Guarantee</h4>
                <p className="text-gray-600 text-sm">
                  We pride ourselves on prompt communication. Expect a response to your inquiry within
                  24 hours during business days.
                </p>
              </div>
            </div>


            {/* Company Information */
            }
          <div className="space-y-8">
            {/* Map Placeholder */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Location</h3>
                <button
                  onClick={() => {
                    const url = 'https://www.google.com/maps/search/' + encodeURIComponent(COMPANY_ADDRESS);
                    window.open(url, '_blank');
                  }}
                  className="bg-gray-100 rounded-lg h-64 w-full flex items-center justify-center mb-6 hover:bg-gray-200 transition-colors"
                >
                  <div className="text-center">
                    <MapPin className="text-gray-500 mx-auto mb-2" size={48} />
                    <p className="text-gray-600 font-medium">Open in Google Maps</p>
                    <p className="text-sm text-gray-400">London, UK - Central Business District</p>
                  </div>
                </button>
              <div className="text-center">
                <p className="text-gray-600 mb-2">We're conveniently located in the heart of London's business district.</p>
                  <button
                    onClick={() => {
                      const url = 'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(COMPANY_ADDRESS);
                      window.open(url, '_blank');
                    }}
                    className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300"
                  >
                    Get Directions →
                  </button>
              </div>
            </div>

            {/* Additional Information moved above; removed here */}

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;