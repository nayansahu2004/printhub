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
import { Link } from "react-router-dom";

const Homepage = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>The PrintHub | Your Vision Our Craft</title>
        <meta 
          name="description" 
          content="Transform your ideas into beautiful reality with The PrintHub. Expert custom printing services for t-shirts, mugs, phone cases, business cards & more. Founded by Satya in September 2024. Get instant quotes via WhatsApp!" 
        />
        <meta 
          name="keywords" 
          content="custom printing, t-shirt printing, mug printing, phone case printing, business cards, banners, personalized gifts, sublimation printing, The PrintHub, Satya, custom design" 
        />
        <meta name="author" content="The Print Hub - Satya Prakash Subudhi (Satya)" />
        <meta property="og:title" content="The Print Hub - Your Vision, Our Craft" />
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

export default Homepage;