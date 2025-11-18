import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import FounderStory from './components/FounderStory';
import VisionMission from './components/VisionMission';
import TeamSection from './components/TeamSection';

const About = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi Papu! I'd like to know more about PrintHub Pro and your custom printing services. Can you help me get started?");
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>About Us - PrintHub Pro | Meet Papu & Our Story</title>
        <meta 
          name="description" 
          content="Meet Satya Prakash Subudhi (Papu), founder of PrintHub Pro. Learn about our journey since September 2024, craftsmanship philosophy, and commitment to transforming your vision into reality through expert custom printing services." 
        />
        <meta name="keywords" content="PrintHub Pro founder, Papu printing services, custom printing story, about PrintHub Pro, printing craftsmanship, personalized products India" />
        <meta property="og:title" content="About PrintHub Pro - Your Vision, Our Craft" />
        <meta property="og:description" content="Discover the story behind PrintHub Pro and meet the passionate team bringing your creative visions to life since September 2024." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://printhubpro.com/about" />
      </Helmet>
      <Header />
      <main className="pt-16 lg:pt-20">
        <HeroSection onWhatsAppClick={handleWhatsAppClick} />
        <FounderStory />
        <VisionMission />
        <TeamSection onWhatsAppClick={handleWhatsAppClick} />
      </main>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={handleWhatsAppClick}
          className="bg-whatsapp hover:bg-whatsapp/90 text-white p-4 rounded-full shadow-neutral-lg hover:shadow-neutral-lg whatsapp-pulse transition-all duration-300 group"
          aria-label="Chat with us on WhatsApp"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="group-hover:scale-110 transition-transform duration-300"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.106"/>
          </svg>
        </button>
      </div>
      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="container-brand">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
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
              <h3 className="text-xl font-brand font-bold text-brand-energy">PrintHub Pro</h3>
            </div>
            <p className="text-sm opacity-80 mb-4">Your Vision, Our Craft</p>
            <p className="text-xs opacity-60">
              © {new Date()?.getFullYear()} PrintHub Pro. All rights reserved. | Founded by Satya Prakash Subudhi (Papu)
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;