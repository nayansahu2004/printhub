import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ServiceHero from './components/ServiceHero';
import ServiceCategories from './components/ServiceCategories';
import ProcessTimeline from './components/ProcessTimeline';
import PricingComparison from './components/PricingComparison';
import CustomerTestimonials from './components/CustomerTestimonials';
import QuickQuoteModal from './components/QuickQuoteModal';

const Services = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleWhatsAppClick = (serviceName = '', price = '') => {
    let message = "Hi Papu! I'm interested in your custom printing services.";
    
    if (serviceName && price) {
      message = `Hi Papu! I'm interested in ${serviceName}. I saw the pricing starts from ₹${price}. Can you help me with more details?`;
    } else if (serviceName) {
      message = `Hi Papu! I'm interested in ${serviceName}. Can you provide more information and pricing?`;
    }
    
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
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
        <title>Custom Printing Services - PrintHub Pro | T-Shirts, Mugs, Keychains & More</title>
        <meta 
          name="description" 
          content="Discover PrintHub Pro's comprehensive custom printing services. From personalized t-shirts and mugs to promotional items and business cards. Quality guaranteed, fast delivery, competitive pricing." 
        />
        <meta 
          name="keywords" 
          content="custom printing, t-shirt printing, personalized mugs, custom keychains, promotional items, business cards, phone cases, banners, bulk printing, custom merchandise" 
        />
        <meta property="og:title" content="Custom Printing Services - PrintHub Pro" />
        <meta 
          property="og:description" 
          content="Transform your vision into reality with our premium custom printing services. Quality craftsmanship, competitive pricing, and fast delivery guaranteed." 
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/services" />
      </Helmet>
      <div className="min-h-screen bg-background">
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
        <footer className="bg-foreground text-white py-12">
          <div className="container-brand">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-brand-energy rounded-lg flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 40 40" className="text-white">
                      <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="2"/>
                      <path d="M12 20h16M20 12v16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-brand font-bold">PrintHub Pro</h3>
                    <p className="text-xs text-white/80">Your Vision, Our Craft</p>
                  </div>
                </div>
                <p className="text-sm text-white/80">
                  Premium custom printing services since September 2024. Transforming ideas into reality with quality and precision.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <div className="space-y-2">
                  <a href="/homepage" className="block text-sm text-white/80 hover:text-white transition-colors">Home</a>
                  <a href="/services" className="block text-sm text-white/80 hover:text-white transition-colors">Services</a>
                  <a href="/gallery" className="block text-sm text-white/80 hover:text-white transition-colors">Gallery</a>
                  <a href="/about" className="block text-sm text-white/80 hover:text-white transition-colors">About</a>
                </div>
              </div>

              {/* Services */}
              <div>
                <h4 className="font-semibold mb-4">Popular Services</h4>
                <div className="space-y-2">
                  <p className="text-sm text-white/80">Custom T-Shirts</p>
                  <p className="text-sm text-white/80">Personalized Mugs</p>
                  <p className="text-sm text-white/80">Business Cards</p>
                  <p className="text-sm text-white/80">Phone Cases</p>
                </div>
              </div>

              {/* Contact */}
              <div>
                <h4 className="font-semibold mb-4">Contact Info</h4>
                <div className="space-y-2">
                  <p className="text-sm text-white/80">+91 98765 43210</p>
                  <p className="text-sm text-white/80">info@printhubpro.com</p>
                  <p className="text-sm text-white/80">Mumbai, Maharashtra</p>
                </div>
              </div>
            </div>

            <div className="border-t border-white/20 mt-8 pt-8 text-center">
              <p className="text-sm text-white/80">
                © {new Date()?.getFullYear()} PrintHub Pro. All rights reserved. | Founded by Satya Prakash Subudhi (Papu)
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Services;