import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactHero = ({ onWhatsAppClick }) => {
  return (
    <section className="relative bg-gradient-brand text-white py-16 lg:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 canvas-texture opacity-10"></div>
      
      <div className="container-brand relative">
        <div className="max-w-4xl mx-auto text-center space-brand-lg">
          {/* Hero Content */}
          <div className="space-brand-md">
            <h1 className="text-brand-hero text-white">
              Let's Bring Your Vision to Life
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 font-body max-w-3xl mx-auto leading-relaxed">
              Ready to create something amazing? We're here to help you every step of the way. 
              From concept to completion, your custom printing journey starts with a simple conversation.
            </p>
          </div>

          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="success"
              size="lg"
              iconName="MessageCircle"
              iconPosition="left"
              onClick={onWhatsAppClick}
              className="whatsapp-pulse text-lg px-8 py-4"
            >
              Start Your Project on WhatsApp
            </Button>
            <div className="flex items-center space-x-2 text-white/80">
              <Icon name="Clock" size={16} />
              <span className="text-sm font-body">Usually responds within 5 minutes</span>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-sm text-white/80">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">&lt;5 min</div>
              <div className="text-sm text-white/80">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-sm text-white/80">WhatsApp Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-sm text-white/80">Quality Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;