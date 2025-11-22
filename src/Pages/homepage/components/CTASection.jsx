import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const CTASection = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi Satya! I'm ready to start my custom printing project. Can we discuss the details and get a quote?");
    window.open(`https://wa.me/917992801158?text=${message}`, '_blank');
  };

  const quickActions = [
    {
      id: 1,
      title: "Quick Quote",
      description: "Get instant pricing for your project",
      icon: "Calculator",
      action: "whatsapp",
      color: "bg-yellow-300/20 text-yellow-300"
    },
    {
      id: 2,
      title: "Design Consultation",
      description: "Free design advice and suggestions",
      icon: "Palette",
      action: "whatsapp",
      color: "bg-yellow-300/20 text-yellow-300"
    },
    {
      id: 3,
      title: "Custom Order",
      description: "Start your personalized project",
      icon: "ShoppingCart",
      action: "custom-order",
      color: "bg-white/5 text-white"
    },
    {
      id: 4,
      title: "View Gallery",
      description: "Browse our latest work",
      icon: "Image",
      action: "gallery",
      color: "bg-white/5 text-white"
    }
  ];

  const handleActionClick = (action) => {
    if (action === 'whatsapp') {
      handleWhatsAppClick();
    }
    // Other actions will be handled by Link components
  };

  return (
    <section
      className="py-16 lg:py-24 relative overflow-hidden"
      style={{
        background: 'linear-gradient(120deg, rgba(8,37,64,1) 0%, rgba(4,12,20,1) 60%, rgba(0,0,0,1) 100%)'
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-8 -z-10">
        <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      </div>

      <div className="container-brand relative z-10">
        {/* Main CTA */}
        <div className="text-center space-y-8 mb-16">
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 bg-white/10 text-yellow-300 px-4 py-2 rounded-full text-sm font-medium">
              <Icon name="Sparkles" size={16} />
              <span>Ready to Get Started?</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Transform Your Ideas Into
              <br />
              <span className="text-white/90">Beautiful Reality</span>
            </h2>
            
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of satisfied customers who have brought their visions to life with The PrintHub. 
              From concept to creation, we're here to make it happen.
            </p>
          </div>

          {/* Primary CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              size="xl"
              iconName="MessageCircle"
              iconPosition="left"
              onClick={handleWhatsAppClick}
              className="bg-yellow-300 text-black border-0 text-lg px-8 py-4 font-semibold"
            >
              Chat with Satya Now
            </Button>
            
            <Link to="/custom-order">
              <Button
                variant="outline"
                size="xl"
                iconName="Palette"
                iconPosition="left"
                className="border-white text-white hover:bg-white/10 hover:text-black text-lg px-8 py-4"
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {quickActions?.map((action) => (
            <div key={action?.id} className="group">
              {action?.action === 'whatsapp' ? (
                <button
                  onClick={() => handleActionClick(action?.action)}
                  className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-left hover:bg-white/10 transition-all duration-300 group-hover:scale-105"
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
                  className="block w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-left hover:bg-white/10 transition-all duration-300 group-hover:scale-105"
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
        <div className="text-center pt-16 border-t border-white/10 mt-16">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">
              Prefer to Call or Email?
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80">
              <a
                href="tel:+917992801158"
                className="flex items-center space-x-2 hover:text-white transition-colors"
              >
                <Icon name="Phone" size={18} />
                <span>+91 79928 01158</span>
              </a>
              <a
                href="mailto:theprinthub.in@gmail.com"
                className="flex items-center space-x-2 hover:text-white transition-colors"
              >
                <Icon name="Mail" size={18} />
                <span>theprinthub.in@gmail.com</span>
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
