import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ServiceHero from './components/ServiceHero';
import ServiceCategories from './components/ServiceCategories';
import ProcessTimeline from './components/ProcessTimeline';
import PricingComparison from './components/PricingComparison';
import CustomerTestimonials from './components/CustomerTestimonials';
import QuickQuoteModal from './components/QuickQuoteModal';
import { Link } from 'react-router-dom';

const Services = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleWhatsAppClick = (serviceName = '', price = '') => {
    let message = "Hi Satya! I'm interested in your custom printing services.";
    
    if (serviceName && price) {
      message = `Hi Satya! I'm interested in ${serviceName}. I saw the pricing starts from ₹${price}. Can you help me with more details?`;
    } else if (serviceName) {
      message = `Hi Satya! I'm interested in ${serviceName}. Can you provide more information and pricing?`;
    }
    
    const whatsappUrl = `https://wa.me/+917992801158?text=${encodeURIComponent("Hello Satya! I have an order for you, can we chat from here on.")}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleQuoteRequest = (service) => {
    setSelectedService(service);
    setIsQuoteModalOpen(true);
  };

  const handleLearnMore = (service) => {
    // Scroll to process timeline section
    const processSection = document.getElementById('process-timeline');
    if (processSection) {
      processSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleQuoteSubmit = (formData, whatsappUrl) => {
    // Open WhatsApp with the formatted message
    window.open(whatsappUrl, '_blank');
    
    // Show success message or handle as needed
    console.log('Quote request submitted:', formData);
  };

  return (
    <>
      <Helmet>
        <title>Custom Printing Services - The Print Hub | T-Shirts, Mugs, Keychains & More</title>
        <meta 
          name="description" 
          content="Discover The PrintHub's comprehensive custom printing services. From personalized t-shirts and mugs to promotional items and business cards. Quality guaranteed, fast delivery, competitive pricing." 
        />
        <meta 
          name="keywords" 
          content="custom printing, t-shirt printing, personalized mugs, custom keychains, promotional items, business cards, phone cases, banners, bulk printing, custom merchandise" 
        />
        <meta property="og:title" content="Custom Printing Services - The PrintHub" />
        <meta 
          property="og:description" 
          content="Transform your vision into reality with our premium custom printing services. Quality craftsmanship, competitive pricing, and fast delivery guaranteed." 
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/services" />
      </Helmet>
      <div className="pt-16 lg:pt-20">
        <Header />
        
        {/* Hero Section */}
        <ServiceHero onWhatsAppClick={handleWhatsAppClick} />
        
        {/* Service Categories */}
        <ServiceCategories 
          onQuoteRequest={handleQuoteRequest}
          onLearnMore={handleLearnMore}
        />
        
        {/* Process Timeline */}
        <div id="process-timeline">
          <ProcessTimeline />
        </div>
        
        {/* Pricing Comparison */}
        <PricingComparison onWhatsAppClick={handleWhatsAppClick} />
        
        {/* Customer Testimonials */}
        <CustomerTestimonials />
        
        {/* Quick Quote Modal */}
        <QuickQuoteModal
          isOpen={isQuoteModalOpen}
          onClose={() => setIsQuoteModalOpen(false)}
          selectedService={selectedService}
          onSubmit={handleQuoteSubmit}
        />

        {/* Floating WhatsApp Button */}
        <div className="fixed bottom-6 right-6 z-40">
          <button
            onClick={() => handleWhatsAppClick()}
            className="w-14 h-14 bg-whatsapp hover:bg-whatsapp/90 text-white rounded-full shadow-neutral-lg hover:shadow-neutral-lg flex items-center justify-center whatsapp-pulse transition-all duration-300 hover:scale-110"
            aria-label="Contact us on WhatsApp"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
            </svg>
          </button>
        </div>

        {/* Footer */}
        <footer className="bg-white text-[#081426] py-12 border-t border-[#081426]/10">
          <div className="container-brand">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

              {/* Company Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Link to="/homepage" className="flex items-center gap-3 group">
                    <img
                      src="../Logo.png"
                      alt="PrintHub Logo"
                      className="h-14 object-contain transition-transform duration-300 group-hover:scale-150"
                    />
                  </Link>
                </div>

                <p className="text-sm text-[#081426]/70 leading-relaxed">
                  Transforming ideas into beautiful reality through expert custom printing and sublimation services since September 2024.
                </p>
              </div>

              {/* Quick Links */}
              <div className="space-y-4">
                <h4 className="font-semibold text-[#081426]">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/services" className="text-[#081426]/70 hover:text-black transition-colors">Services</a></li>
                  <li><a href="/gallery" className="text-[#081426]/70 hover:text-black transition-colors">Gallery</a></li>
                  <li><a href="/about" className="text-[#081426]/70 hover:text-black transition-colors">About Us</a></li>
                  <li><a href="/contact" className="text-[#081426]/70 hover:text-black transition-colors">Contact</a></li>
                  <li><a href="/custom-order" className="text-[#081426]/70 hover:text-black transition-colors">Custom Order</a></li>
                </ul>
              </div>

              {/* Services */}
              <div className="space-y-4">
                <h4 className="font-semibold text-[#081426]">Our Services</h4>
                <ul className="space-y-2 text-sm">
                  <li className="text-[#081426]/70 hover:text-black transition-colors">Custom T-Shirts</li>
                  <li className="text-[#081426]/70 hover:text-black transition-colors">Personalized Mugs</li>
                  <li className="text-[#081426]/70 hover:text-black transition-colors">Phone Cases</li>
                  <li className="text-[#081426]/70 hover:text-black transition-colors">Business Cards</li>
                  <li className="text-[#081426]/70 hover:text-black transition-colors">Banners & Signage</li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <h4 className="font-semibold text-[#081426]">Get in Touch</h4>
                <div className="space-y-3 text-sm">
                  <a href="tel:+917992801158" className="flex items-center space-x-2 text-[#081426]/70 hover:text-black transition-colors">
                    <span>📞</span>
                    <span>+91 79928 01158</span>
                  </a>
                  <a href="mailto:theprinthub.in@gmail.com" className="flex items-center space-x-2 text-[#081426]/70 hover:text-black transition-colors">
                    <span>✉️</span>
                    <span>theprinthub.in@gmail.com</span>
                  </a>
                  <div className="flex items-center space-x-2 text-[#081426]/70 hover:text-black transition-colors">
                    <span>🕒</span>
                    <span>Mon-Sat: 9 AM - 8 PM</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Bar */}
            <div className="border-t border-[#081426]/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-[#081426]/70">
                © {new Date()?.getFullYear()} The PrintHub All rights reserved. Founded by Satya Prakash Subudhi .
              </p>
              <div className="flex items-center space-x-4 text-sm text-[#081426]/70">
                <span>Made with ❤️ for custom printing</span>
              </div>
            </div>
          </div>
        </footer>
 
      </div>
    </>
  );
};

export default Services;