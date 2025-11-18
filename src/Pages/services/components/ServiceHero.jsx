import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ServiceHero = ({ onWhatsAppClick }) => {
  return (
    <section className="relative bg-gradient-brand text-white py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 canvas-texture opacity-10"></div>
      
      <div className="container-brand relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-white/80">
                <Icon name="Sparkles" size={20} />
                <span className="text-sm font-medium uppercase tracking-wider">
                  Premium Customization Services
                </span>
              </div>
              
              <h1 className="text-brand-hero text-white">
                Transform Your Vision Into Reality
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed max-w-lg">
                From personalized gifts to branded merchandise, we bring your ideas to life with precision craftsmanship and attention to detail.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-sm text-white/80">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">15+</div>
                <div className="text-sm text-white/80">Service Types</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">24hrs</div>
                <div className="text-sm text-white/80">Quick Turnaround</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="secondary"
                size="lg"
                iconName="MessageCircle"
                iconPosition="left"
                onClick={onWhatsAppClick}
                className="whatsapp-pulse">

                Get Instant Quote
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                iconName="Phone"
                iconPosition="left"
                className="border-white text-white hover:bg-white hover:text-brand-energy">

                Call Now: +91 98765 43210
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-brand-lg">
              <Image
                src="https://img.rocket.new/generatedImages/rocket_gen_img_19b68d4ad-1763379624394.png"
                alt="Professional printing workspace with custom t-shirts, mugs, and design equipment showcasing quality craftsmanship"
                className="w-full h-96 object-cover" />

              
              {/* Floating Quality Badge */}
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-neutral">
                <div className="flex items-center space-x-2">
                  <Icon name="Award" size={20} className="text-brand-energy" />
                  <div>
                    <div className="text-sm font-semibold text-foreground">Premium Quality</div>
                    <div className="text-xs text-muted-foreground">Guaranteed</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Process Steps */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-neutral-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-brand-energy rounded-full flex items-center justify-center">
                  <Icon name="Zap" size={20} className="text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">Quick Process</div>
                  <div className="text-xs text-muted-foreground">Design → Print → Deliver</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default ServiceHero;