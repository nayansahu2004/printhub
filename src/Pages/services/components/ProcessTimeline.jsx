import React from 'react';
import Icon from '../../../components/AppIcon';

const ProcessTimeline = () => {
  const steps = [
    {
      id: 1,
      title: "Share Your Vision",
      description: "Tell us about your project through WhatsApp or our contact form. Share your ideas, requirements, and any reference materials.",
      icon: "MessageSquare",
      duration: "5 minutes",
      color: "bg-blue-500"
    },
    {
      id: 2,
      title: "Design & Quote",
      description: "Our team creates a custom design mockup and provides a detailed quote based on your specifications and quantity.",
      icon: "Palette",
      duration: "2-4 hours",
      color: "bg-purple-500"
    },
    {
      id: 3,
      title: "Approval & Payment",
      description: "Review the design, request any changes, and proceed with payment once you're completely satisfied with the mockup.",
      icon: "CheckCircle",
      duration: "Your timeline",
      color: "bg-green-500"
    },
    {
      id: 4,
      title: "Production",
      description: "We begin crafting your custom items using premium materials and state-of-the-art printing technology.",
      icon: "Settings",
      duration: "1-5 days",
      color: "bg-orange-500"
    },
    {
      id: 5,
      title: "Quality Check",
      description: "Every item undergoes thorough quality inspection to ensure it meets our high standards before packaging.",
      icon: "Shield",
      duration: "30 minutes",
      color: "bg-red-500"
    },
    {
      id: 6,
      title: "Delivery",
      description: "Your custom items are carefully packaged and delivered to your doorstep or ready for pickup at our location.",
      icon: "Truck",
      duration: "Same day",
      color: "bg-brand-energy"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container-brand">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-brand-energy mb-4">
            <Icon name="Workflow" size={24} />
            <span className="text-sm font-medium uppercase tracking-wider">Our Process</span>
          </div>
          
          <h2 className="text-brand-title text-foreground mb-4">
            From Concept to Creation
          </h2>
          
          <p className="text-brand-body text-muted-foreground max-w-2xl mx-auto">
            Our streamlined 6-step process ensures your custom printing project is handled with care, precision, and delivered on time.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-border transform -translate-y-1/2"></div>
              
              {/* Steps */}
              <div className="grid grid-cols-6 gap-4">
                {steps?.map((step, index) => (
                  <div key={step?.id} className="relative">
                    {/* Step Circle */}
                    <div className={`w-16 h-16 ${step?.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-neutral-lg relative z-10`}>
                      <Icon name={step?.icon} size={24} className="text-white" />
                    </div>
                    
                    {/* Step Content */}
                    <div className="text-center space-y-2">
                      <div className="text-xs font-medium text-brand-energy uppercase tracking-wider">
                        Step {step?.id}
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {step?.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step?.description}
                      </p>
                      <div className="inline-flex items-center space-x-1 text-xs text-brand-energy font-medium">
                        <Icon name="Clock" size={12} />
                        <span>{step?.duration}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-8">
            {steps?.map((step, index) => (
              <div key={step?.id} className="relative">
                {/* Connector Line */}
                {index < steps?.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-16 bg-border"></div>
                )}
                
                <div className="flex space-x-4">
                  {/* Step Circle */}
                  <div className={`w-16 h-16 ${step?.color} rounded-full flex items-center justify-center flex-shrink-0 shadow-neutral-lg`}>
                    <Icon name={step?.icon} size={24} className="text-white" />
                  </div>
                  
                  {/* Step Content */}
                  <div className="flex-1 space-y-2">
                    <div className="text-xs font-medium text-brand-energy uppercase tracking-wider">
                      Step {step?.id}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {step?.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step?.description}
                    </p>
                    <div className="inline-flex items-center space-x-1 text-xs text-brand-energy font-medium">
                      <Icon name="Clock" size={12} />
                      <span>{step?.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Guarantee */}
        <div className="mt-16 bg-muted rounded-2xl p-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-brand-energy mb-4">
              <Icon name="Award" size={24} />
              <span className="text-sm font-medium uppercase tracking-wider">Quality Guarantee</span>
            </div>
            
            <h3 className="text-2xl font-bold text-foreground mb-4">
              100% Satisfaction Guaranteed
            </h3>
            
            <p className="text-muted-foreground mb-6">
              We stand behind every custom item we create. If you're not completely satisfied with the quality or design, we'll make it right or provide a full refund.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="flex items-center justify-center space-x-2">
                <Icon name="Zap" size={20} className="text-brand-energy" />
                <span className="text-sm font-medium text-foreground">Fast Turnaround</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Icon name="Shield" size={20} className="text-brand-energy" />
                <span className="text-sm font-medium text-foreground">Quality Materials</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Icon name="Heart" size={20} className="text-brand-energy" />
                <span className="text-sm font-medium text-foreground">Personal Touch</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;