import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ServicesPreview from './components/ServicesPreview';
import FeaturedWork from './components/FeaturedWork';
import AboutPreview from './components/AboutPreview';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const Homepage = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>PrintHub Pro - Your Vision, Our Craft | Custom Printing Services</title>
        <meta 
          name="description" 
          content="Transform your ideas into beautiful reality with PrintHub Pro. Expert custom printing services for t-shirts, mugs, phone cases, business cards & more. Founded by Papu in September 2024. Get instant quotes via WhatsApp!" 
        />
        <meta 
          name="keywords" 
          content="custom printing, t-shirt printing, mug printing, phone case printing, business cards, banners, personalized gifts, sublimation printing, PrintHub Pro, Papu, custom design" 
        />
        <meta name="author" content="PrintHub Pro - Satya Prakash Subudhi (Papu)" />
        <meta property="og:title" content="PrintHub Pro - Your Vision, Our Craft" />
        <meta 
          property="og:description" 
          content="Expert custom printing services for all your personalization needs. Quality guaranteed, fast turnaround, 24/7 WhatsApp support." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://printhubpro.com" />
        <link rel="canonical" href="https://printhubpro.com" />
      </Helmet>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="pt-16 lg:pt-20">
          {/* Hero Section */}
          <HeroSection />

          {/* Services Preview */}
          <ServicesPreview />

          {/* Featured Work Gallery */}
          <FeaturedWork />

          {/* About Preview */}
          <AboutPreview />

          {/* Customer Testimonials */}
          <TestimonialsSection />

          {/* Call to Action */}
          <CTASection />
        </main>

        {/* Floating WhatsApp Button */}
        <FloatingWhatsApp />

        {/* Footer */}
        <footer className="bg-black text-white py-12 border-t border-white/10">
          <div className="container-brand">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              {/* Company Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <svg 
                    width="32" 
                    height="32" 
                    viewBox="0 0 40 40" 
                    className="text-yellow-300"
                  >
                    <circle 
                      cx="20" 
                      cy="20" 
                      r="18" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                    />
                    <path 
                      d="M12 20h16M20 12v16" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round"
                    />
                  </svg>
                  <div>
                    <h3 className="text-lg font-brand font-bold text-white">PrintHub Pro</h3>
                    <p className="text-xs text-white/70">Your Vision, Our Craft</p>
                  </div>
                </div>

                <p className="text-sm text-white/80 leading-relaxed">
                  Transforming ideas into beautiful reality through expert custom printing and sublimation services since September 2024.
                </p>
              </div>

              {/* Quick Links */}
              <div className="space-y-4">
                <h4 className="font-semibold text-white">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/services" className="text-white/80 hover:text-yellow-300 transition-colors">Services</a></li>
                  <li><a href="/gallery" className="text-white/80 hover:text-yellow-300 transition-colors">Gallery</a></li>
                  <li><a href="/about" className="text-white/80 hover:text-yellow-300 transition-colors">About Us</a></li>
                  <li><a href="/contact" className="text-white/80 hover:text-yellow-300 transition-colors">Contact</a></li>
                  <li><a href="/custom-order" className="text-white/80 hover:text-yellow-300 transition-colors">Custom Order</a></li>
                </ul>
              </div>

              {/* Services */}
              <div className="space-y-4">
                <h4 className="font-semibold text-white">Our Services</h4>
                <ul className="space-y-2 text-sm">
                  <li className="text-white/80">Custom T-Shirts</li>
                  <li className="text-white/80">Personalized Mugs</li>
                  <li className="text-white/80">Phone Cases</li>
                  <li className="text-white/80">Business Cards</li>
                  <li className="text-white/80">Banners & Signage</li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <h4 className="font-semibold text-white">Get in Touch</h4>
                <div className="space-y-3 text-sm">
                  <a href="tel:+919876543210" className="flex items-center space-x-2 text-white/80 hover:text-yellow-300 transition-colors">
                    <span>📞</span>
                    <span>+91 98765 43210</span>
                  </a>
                  <a href="mailto:hello@printhubpro.com" className="flex items-center space-x-2 text-white/80 hover:text-yellow-300 transition-colors">
                    <span>✉️</span>
                    <span>hello@printhubpro.com</span>
                  </a>
                  <div className="flex items-center space-x-2 text-white/80">
                    <span>🕒</span>
                    <span>Mon-Sat: 9 AM - 8 PM</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-white/60">
                © {new Date()?.getFullYear()} PrintHub Pro. All rights reserved. Founded by Satya Prakash Subudhi (Papu).
              </p>
              <div className="flex items-center space-x-4 text-sm text-white/60">
                <span>Made with ❤️ for custom printing</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Homepage;