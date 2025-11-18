import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ContactHero from './components/ContactHero';
import ContactMethods from './components/ContactMethods';
import ContactForm from './components/ContactForm';
import LocationInfo from './components/LocationInfo';
import FAQ from './components/FAQ';
import SocialConnect from './components/SocialConnect';

const ContactPage = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi Papu, I'm interested in custom printing services. Can you help me get started?");
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Contact Us - PrintHub Pro | Custom Printing Services in Bhubaneswar</title>
        <meta name="description" content="Get in touch with PrintHub Pro for custom printing services. WhatsApp support, email, phone, and studio visits available. Fast response times and personalized service." />
        <meta name="keywords" content="contact PrintHub Pro, custom printing Bhubaneswar, WhatsApp printing service, printing consultation, studio visit" />
        <meta property="og:title" content="Contact PrintHub Pro - Your Custom Printing Partner" />
        <meta property="og:description" content="Multiple ways to connect with PrintHub Pro. WhatsApp for instant support, email for detailed inquiries, or visit our Bhubaneswar studio." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://printhubpro.com/contact" />
      </Helmet>
      <Header />
      <main className="pt-16 lg:pt-20">
        <ContactHero onWhatsAppClick={handleWhatsAppClick} />
        <ContactMethods onWhatsAppClick={handleWhatsAppClick} />
        <ContactForm onWhatsAppClick={handleWhatsAppClick} />
        <LocationInfo onWhatsAppClick={handleWhatsAppClick} />
        <FAQ onWhatsAppClick={handleWhatsAppClick} />
        <SocialConnect onWhatsAppClick={handleWhatsAppClick} />
      </main>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={handleWhatsAppClick}
          className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground p-4 rounded-full shadow-neutral-lg hover:shadow-neutral-lg whatsapp-pulse group transition-all duration-300"
          aria-label="Chat on WhatsApp"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:scale-110 transition-transform duration-300"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        </button>
      </div>
      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container-brand">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <svg 
                  width="32" 
                  height="32" 
                  viewBox="0 0 40 40" 
                  className="text-brand-energy"
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
                  <h3 className="text-xl font-brand font-bold text-brand-energy">PrintHub Pro</h3>
                  <p className="text-sm text-background/80">Your Vision, Our Craft</p>
                </div>
              </div>
              <p className="text-background/70 text-sm leading-relaxed mb-4">
                Transforming your ideas into beautiful custom prints since September 2024. 
                From personalized gifts to business branding, we bring your vision to life with quality and care.
              </p>
              <div className="flex space-x-4">
                <button 
                  onClick={() => window.open('https://instagram.com/printhubpro', '_blank')}
                  className="text-background/70 hover:text-brand-energy transition-colors duration-200"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </button>
                <button 
                  onClick={() => window.open('https://facebook.com/printhubpro', '_blank')}
                  className="text-background/70 hover:text-brand-energy transition-colors duration-200"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </button>
                <button 
                  onClick={handleWhatsAppClick}
                  className="text-background/70 hover:text-whatsapp transition-colors duration-200"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                  </svg>
                </button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-background mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/services" className="text-background/70 hover:text-brand-energy transition-colors">Services</a></li>
                <li><a href="/gallery" className="text-background/70 hover:text-brand-energy transition-colors">Gallery</a></li>
                <li><a href="/about" className="text-background/70 hover:text-brand-energy transition-colors">About Us</a></li>
                <li><a href="/custom-order" className="text-background/70 hover:text-brand-energy transition-colors">Custom Order</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-background mb-4">Contact Info</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li>+91 98765 43210</li>
                <li>hello@printhubpro.com</li>
                <li>Bhubaneswar, Odisha</li>
                <li>Mon-Sat: 9 AM - 8 PM</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-8 pt-8 text-center">
            <p className="text-background/60 text-sm">
              © {new Date()?.getFullYear()} PrintHub Pro. All rights reserved. | Crafted with ❤️ by Satya Prakash Subudhi
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;