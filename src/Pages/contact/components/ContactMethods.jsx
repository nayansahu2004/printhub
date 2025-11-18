import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactMethods = ({ onWhatsAppClick }) => {
  const contactMethods = [
    {
      id: 1,
      icon: "MessageCircle",
      title: "WhatsApp Chat",
      description: "Instant messaging with quick responses",
      value: "+91 98765 43210",
      action: "Chat Now",
      isPrimary: true,
      available: "24/7 Available",
      responseTime: "Usually responds within 5 minutes"
    },
    {
      id: 2,
      icon: "Phone",
      title: "Phone Call",
      description: "Direct voice consultation",
      value: "+91 98765 43210",
      action: "Call Now",
      isPrimary: false,
      available: "Mon-Sat: 9 AM - 8 PM",
      responseTime: "Immediate response during business hours"
    },
    {
      id: 3,
      icon: "Mail",
      title: "Email Support",
      description: "Detailed project discussions",
      value: "hello@printhubpro.com",
      action: "Send Email",
      isPrimary: false,
      available: "Always Open",
      responseTime: "Response within 2-4 hours"
    },
    {
      id: 4,
      icon: "MapPin",
      title: "Visit Our Studio",
      description: "See our work in person",
      value: "Bhubaneswar, Odisha",
      action: "Get Directions",
      isPrimary: false,
      available: "By Appointment",
      responseTime: "Schedule via WhatsApp"
    }
  ];

  const handleContactAction = (method) => {
    switch (method?.icon) {
      case "MessageCircle":
        onWhatsAppClick();
        break;
      case "Phone":
        window.open("tel:+919876543210", "_self");
        break;
      case "Mail":
        window.open("mailto:hello@printhubpro.com?subject=Custom Printing Inquiry", "_self");
        break;
      case "MapPin":
        const message = encodeURIComponent("Hi Papu, I'd like to schedule a visit to your studio. When would be a good time?");
        window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
        break;
      default:
        break;
    }
  };

  return (
    <section className="py-16 lg:py-20 bg-canvas">
      <div className="container-brand">
        <div className="text-center space-brand-md mb-12">
          <h2 className="text-brand-title">Choose Your Preferred Way to Connect</h2>
          <p className="text-brand-body text-muted-foreground max-w-2xl mx-auto">
            We believe in making communication easy and convenient. Pick the method that works best for you, 
            and we'll be right there to help bring your ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods?.map((method) => (
            <div
              key={method?.id}
              className={`card-brand group hover:scale-105 transition-all duration-300 ${
                method?.isPrimary ? 'ring-2 ring-brand-energy shadow-brand-lg' : ''
              }`}
            >
              {method?.isPrimary && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-brand-energy text-brand-energy-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    Recommended
                  </span>
                </div>
              )}

              <div className="text-center space-brand-sm">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                  method?.isPrimary 
                    ? 'bg-brand-energy text-brand-energy-foreground' 
                    : 'bg-muted text-foreground group-hover:bg-brand-energy group-hover:text-brand-energy-foreground'
                } transition-colors duration-300`}>
                  <Icon name={method?.icon} size={24} />
                </div>

                <h3 className="text-lg font-semibold text-foreground">{method?.title}</h3>
                <p className="text-sm text-muted-foreground">{method?.description}</p>
                
                <div className="py-3">
                  <div className="font-medium text-foreground">{method?.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{method?.available}</div>
                </div>

                <Button
                  variant={method?.isPrimary ? "default" : "outline"}
                  size="sm"
                  iconName={method?.icon}
                  iconPosition="left"
                  onClick={() => handleContactAction(method)}
                  className={`w-full ${method?.isPrimary ? 'whatsapp-pulse' : ''}`}
                >
                  {method?.action}
                </Button>

                <div className="text-xs text-muted-foreground mt-2 flex items-center justify-center space-x-1">
                  <Icon name="Clock" size={12} />
                  <span>{method?.responseTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Contact */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-warning/10 text-warning-foreground px-4 py-2 rounded-lg">
            <Icon name="AlertCircle" size={16} />
            <span className="text-sm font-medium">
              Urgent orders? WhatsApp us directly for fastest response!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;