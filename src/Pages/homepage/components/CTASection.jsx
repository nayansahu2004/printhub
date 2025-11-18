import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const CTASection = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi Satya! I'm ready to start my custom printing project. Can we discuss the details and get a quote?");
    window.open(`https://wa.me/919937643338?text=${message}`, '_blank');
  };

  const quickActions = [
    {
      id: 1,
      title: "Quick Quote",
      description: "Get instant pricing for your project",
      icon: "Calculator",
      action: "whatsapp",
      color: "bg-success/10 text-success"
    },
    {
      id: 2,
      title: "Design Consultation",
      description: "Free design advice and suggestions",
      icon: "Palette",
      action: "whatsapp",
      color: "bg-brand-energy/10 text-brand-energy"
    },
    {
      id: 3,
      title: "Custom Order",
      description: "Start your personalized project",
      icon: "ShoppingCart",
      action: "custom-order",
      color: "bg-professional/10 text-professional"
    },
    {
      id: 4,
      title: "View Gallery",
      description: "Browse our latest work",
      icon: "Image",
      action: "gallery",
      color: "bg-warning/10 text-warning"
    }
  ];

  const handleActionClick = (action) => {
    if (action === 'whatsapp') {
      handleWhatsAppClick();
    }
    // Other actions will be handled by Link components
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-brand relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="canvas-texture w-full h-full"></div>
      </div>
      <div className="container-brand relative z-10">
        {/* Main CTA */}
        <div className="text-center space-y-8 mb-16">
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">
              <Icon name="Sparkles" size={16} />
              <span>Ready to Get Started?</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Transform Your Ideas Into
              <br />
              <span className="text-white/90">Beautiful Reality</span>
            </h2>
            
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of satisfied customers who have brought their visions to life with PrintHub Pro. 
              From concept to creation, we're here to make it happen.
            </p>
          </div>

          {/* Primary CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="xl"
              iconName="MessageCircle"
              iconPosition="left"
              onClick={handleWhatsAppClick}
              className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground border-0 text-lg px-8 py-4 whatsapp-pulse"
            >
              Chat with Satya Now
            </Button>
            
            <Link to="/custom-order">
              <Button
                variant="outline"
                size="xl"
                iconName="Palette"
                iconPosition="left"
                className="border-white text-white hover:bg-white hover:text-brand-energy text-lg px-8 py-4"
              >
                Start Custom Order
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 pt-8 text-white/80">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={20} className="text-white" />
              <span className="text-sm font-medium">Quality Guaranteed</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={20} className="text-white" />
              <span className="text-sm font-medium">Fast Turnaround</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="MessageCircle" size={20} className="text-white" />
              <span className="text-sm font-medium">24/7 WhatsApp Support</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Heart" size={20} className="text-white" />
              <span className="text-sm font-medium">100+ Happy Customers</span>
            </div>
          </div>
        </div>

        {/* Quick Actions Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickActions?.map((action) => (
            <div key={action?.id} className="group">
              {action?.action === 'whatsapp' ? (
                <button
                  onClick={() => handleActionClick(action?.action)}
                  className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-left hover:bg-white/20 transition-all duration-300 group-hover:scale-105"
                >
                  <div className="space-y-4">
                    <div className={`w-12 h-12 rounded-lg ${action?.color} flex items-center justify-center`}>
                      <Icon name={action?.icon} size={24} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-white group-hover:text-white/90 transition-colors">
                        {action?.title}
                      </h3>
                      <p className="text-sm text-white/70 leading-relaxed">
                        {action?.description}
                      </p>
                    </div>
                    <div className="flex items-center text-white/60 group-hover:text-white/80 transition-colors">
                      <span className="text-sm font-medium">Get Started</span>
                      <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </button>
              ) : (
                <Link
                  to={action?.action === 'custom-order' ? '/custom-order' : '/gallery'}
                  className="block w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-left hover:bg-white/20 transition-all duration-300 group-hover:scale-105"
                >
                  <div className="space-y-4">
                    <div className={`w-12 h-12 rounded-lg ${action?.color} flex items-center justify-center`}>
                      <Icon name={action?.icon} size={24} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-white group-hover:text-white/90 transition-colors">
                        {action?.title}
                      </h3>
                      <p className="text-sm text-white/70 leading-relaxed">
                        {action?.description}
                      </p>
                    </div>
                    <div className="flex items-center text-white/60 group-hover:text-white/80 transition-colors">
                      <span className="text-sm font-medium">Explore</span>
                      <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="text-center pt-16 border-t border-white/20 mt-16">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">
              Prefer to Call or Email?
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80">
              <a
                href="tel:+919876543210"
                className="flex items-center space-x-2 hover:text-white transition-colors"
              >
                <Icon name="Phone" size={18} />
                <span>+91 72055 40108</span>
              </a>
              <a
                href="mailto:hello@printhubpro.com"
                className="flex items-center space-x-2 hover:text-white transition-colors"
              >
                <Icon name="Mail" size={18} />
                <span>hello@printhubpro.com</span>
              </a>
            </div>
            <p className="text-sm text-white/60">
              Available Monday to Saturday, 9 AM to 8 PM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;