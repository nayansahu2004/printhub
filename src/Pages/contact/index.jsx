import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ContactHero from './components/ContactHero';
import ContactMethods from './components/ContactMethods';
import ContactForm from './components/ContactForm';
import LocationInfo from './components/LocationInfo';
import FAQ from './components/FAQ';
import SocialConnect from './components/SocialConnect';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi Satya, I'm interested in custom printing services. Can you help me get started?");
    window.open(`https://wa.me/917992801158?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Contact Us - The Print Hub | Custom Printing Services in Bhubaneswar</title>
        <meta name="description" content="Get in touch with The Print Hub for custom printing services. WhatsApp support, email, phone, and studio visits available. Fast response times and personalized service." />
        <meta name="keywords" content="contact The PrintHub, custom printing Bhubaneswar, WhatsApp printing service, printing consultation, studio visit" />
        <meta property="og:title" content="Contact The Print Hub - Your Custom Printing Partner" />
        <meta property="og:description" content="Multiple ways to connect with The PrintHub. WhatsApp for instant support, email for detailed inquiries, or visit our Bhubaneswar studio." />
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
                      className="h-14 object-contain transition-transform duration-300 group-hover:scale-110"
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
  );
};

export default ContactPage;