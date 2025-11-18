import React from 'react';
import Icon from '../../../components/AppIcon';

const VisionMission = () => {
  const values = [
    {
      icon: "Target",
      title: "Customer-Centric",
      description: "Every decision we make starts with understanding your needs and exceeding your expectations."
    },
    {
      icon: "Award",
      title: "Quality Excellence",
      description: "We never compromise on quality. Each product undergoes rigorous quality checks before delivery."
    },
    {
      icon: "Users",
      title: "Collaborative Spirit",
      description: "We believe in partnership, not just transactions. Your success is our success."
    },
    {
      icon: "Zap",
      title: "Innovation Drive",
      description: "Constantly evolving our techniques and technology to bring you the latest in customization."
    },
    {
      icon: "Shield",
      title: "Trust & Transparency",
      description: "Open communication, honest pricing, and reliable delivery - building trust one project at a time."
    },
    {
      icon: "Heart",
      title: "Passion for Craft",
      description: "We love what we do, and it shows in every piece we create. Passion drives perfection."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container-brand">
        {/* Vision & Mission */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Vision */}
          <div className="card-brand-elevated text-center lg:text-left">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-energy rounded-lg mb-6 mx-auto lg:mx-0">
              <Icon name="Eye" size={32} className="text-white" />
            </div>
            <h2 className="text-brand-title text-foreground mb-4">Our Vision</h2>
            <p className="text-brand-body text-muted-foreground mb-6">
              To become the leading destination for personalized printing solutions, where creativity meets craftsmanship. We envision a world where everyone can express their unique identity through beautifully customized products.
            </p>
            <div className="bg-brand-energy/10 rounded-lg p-4">
              <p className="text-sm font-medium text-brand-energy">
                "Empowering personal expression through exceptional customization"
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="card-brand-elevated text-center lg:text-left">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-professional rounded-lg mb-6 mx-auto lg:mx-0">
              <Icon name="Compass" size={32} className="text-white" />
            </div>
            <h2 className="text-brand-title text-foreground mb-4">Our Mission</h2>
            <p className="text-brand-body text-muted-foreground mb-6">
              To transform your creative visions into tangible, high-quality products through expert craftsmanship, innovative techniques, and personalized service. We're committed to making customization accessible, affordable, and exceptional.
            </p>
            <div className="bg-professional/10 rounded-lg p-4">
              <p className="text-sm font-medium text-professional">
                "Your Vision, Our Craft - Bringing ideas to life since 2024"
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="text-center mb-12">
          <h2 className="text-brand-title text-foreground mb-4">Our Core Values</h2>
          <p className="text-brand-body text-muted-foreground max-w-2xl mx-auto">
            These principles guide everything we do, from the first conversation to the final delivery. They're not just words on a page—they're the foundation of our business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values?.map((value, index) => (
            <div key={index} className="card-brand group hover:shadow-brand-lg text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-muted rounded-lg mb-4 group-hover:bg-brand-energy group-hover:text-white transition-all duration-300">
                <Icon name={value?.icon} size={24} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{value?.title}</h3>
              <p className="text-sm text-muted-foreground">{value?.description}</p>
            </div>
          ))}
        </div>

        {/* Commitment Statement */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-brand rounded-2xl p-8 lg:p-12 text-white">
              <h2 className="text-2xl lg:text-3xl font-bold mb-6">Our Commitment to You</h2>
              <p className="text-lg mb-8 opacity-90">
                At PrintHub Pro, we're not just creating products—we're crafting experiences, building relationships, and helping you tell your story. Every project is a promise kept, every delivery is trust earned.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <div className="text-sm opacity-80">Quality Guarantee</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <div className="text-sm opacity-80">WhatsApp Support</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">∞</div>
                  <div className="text-sm opacity-80">Creative Possibilities</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;