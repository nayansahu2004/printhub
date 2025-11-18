import React from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = ({ onWhatsAppClick }) => {
  return (
    <section className="relative bg-gradient-canvas py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 canvas-texture opacity-30"></div>
      <div className="container-brand relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-brand-lg">
            <div className="space-brand-md">
              <h1 className="text-brand-hero text-foreground">
                Meet Papu
                <span className="block text-brand-energy">The Creative Mind Behind PrintHub Pro</span>
              </h1>
              <p className="text-brand-body text-muted-foreground max-w-2xl">
                Founded in September 2024, PrintHub Pro represents fresh energy in the customization space—where every blank canvas becomes a story waiting to be told. Our journey began with a simple belief: your vision deserves expert craftsmanship.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                iconName="MessageCircle"
                iconPosition="left"
                onClick={onWhatsAppClick}
                className="btn-whatsapp">

                Chat with Papu
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="ArrowDown"
                iconPosition="right"
                onClick={() => document.getElementById('founder-story')?.scrollIntoView({ behavior: 'smooth' })}>

                Our Story
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-brand-lg">
              <Image
                src="https://img.rocket.new/generatedImages/rocket_gen_img_167ba037e-1763294226742.png"
                alt="Satya Prakash Subudhi (Papu), founder of PrintHub Pro, smiling confidently in casual business attire with printing equipment in background"
                className="w-full h-[500px] lg:h-[600px] object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-lg p-4 shadow-neutral-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-energy">3+</div>
                <div className="text-sm text-muted-foreground">Months of Excellence</div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-card border border-border rounded-lg p-4 shadow-neutral-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-professional">500+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;