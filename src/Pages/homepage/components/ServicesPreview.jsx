import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import Shirt from "../../../assets/Custom_Shirt.png"
import Cushion from "../../../assets/Custom_Cushion.png"
import Apron from "../../../assets/Custom_Apron.png"
import Hoodie from "../../../assets/Custom_Hoodie.png"
import Bag from "../../../assets/Custom_Bag.png"
import Sublimation from "../../../assets/Custom_Sublimation.png"
import Key from "../../../assets/Custom_Key.png"
import Curtain from "../../../assets/Custom_Curtain.png"
import Mugs from "../../../assets/Custom_Mugs.png"
import Sipper from "../../../assets/Custom_Sipper.png"
import Tote from "../../../assets/Custom_Tote.png"
import Crystal from "../../../assets/Custom_Crystal.png"


const ServicesPreview = () => {
  const services = [
    {
      id: 1,
      name: "Custom T-Shirts",
      description: "Premium quality cotton tees with vibrant, long-lasting prints",
      image: Shirt,
      alt: "Custom printed white t-shirt with colorful geometric design displayed on wooden background",
      icon: "Shirt",
      features: ["All Sizes", "Premium Cotton", "Vibrant Colors"],
      popular: true
    },
    {
      id: 2,
      name: "Custom Cushions",
      description: "Soft cushions with personalized prints for home and gifting",
      image: Cushion,
      alt: "Decorative cushions on modern sofa",
      icon: "Sofa",
      features: ["Soft Fabric", "Fade Resistant", "Custom Designs"]
    }
    ,
    
    // {
    //   id: 2,
    //   name: "Custom Mugs",
    //   description: "Ceramic mugs perfect for gifts, offices, and personal use",
    //   image: "https://images.unsplash.com/photo-1602265303802-e77eb64d0e2b",
    //   alt: "White ceramic mug with custom mandala design in blue and orange colors on neutral background",
    //   icon: "Coffee",
    //   features: ["Dishwasher Safe", "11oz & 15oz", "Photo Quality"]
    // },
    {
      id: 3,
      name: "Custom Aprons",
      description: "Durable printed aprons for kitchens, cafes, and events",
      image: Apron,
      alt: "Person wearing apron while cooking",
      icon: "UtensilsCrossed",
      features: ["Durable Fabric", "Wash Safe", "Perfect Fit"]
    }
    ,
    {
      id: 4,
      name: "Custom Hoodies",
      description: "Cozy hoodies with personalized prints for style and comfort",
      image: Hoodie,
      alt: "Black hoodie with white custom logo print displayed on mannequin in modern studio setting",
      icon: "Zap",
      features: ["Unisex Fit", "Soft Fabric", "Durable Print"]
    },
    {
      id: 4,
      name: "School Bags & Stationery",
      description: "Customized school essentials for students and institutions",
      image: Bag,
      alt: "School backpack with stationery",
      icon: "Backpack",
      features: ["Student Friendly", "Bulk Orders", "Custom Branding"]
    },    
    {
      id: 5,
      name: "Sublimation T-Shirts",
      description: "Photo-quality sublimation prints with vibrant color accuracy",
      image: Sublimation,
      alt: "Graphic printed sublimation t-shirt",
      icon: "Palette",
      features: ["Photo Prints", "No Peeling", "Breathable Fabric"]
    },
    {
      id: 6,
      name: "Sublimation Key Chains",
      description: "Compact personalized keychains for gifting and branding",
      image: Key,
      alt: "Keychain on wooden surface",
      icon: "KeyRound",
      features: ["Lightweight", "Sharp Prints", "Great for Gifting"]
    },
    {
      id: 7,
      name: "Printed Bedsheets & Curtains",
      description: "Elegant printed fabrics to elevate home interiors",
      image: Curtain,
      alt: "Bedroom with printed bedsheets and curtains",
      icon: "BedDouble",
      features: ["Soft Fabric", "Color Fastness", "Custom Patterns"]
    },
    {
      id: 8,
      name: "Sublimation Mugs",
      description: "High-quality mugs with photo-realistic sublimation prints",
      image: Mugs,
      alt: "Coffee mug on table",
      icon: "Coffee",
      features: ["Photo Quality", "Heat Resistant", "Long Lasting"]
    },
    {
      id: 9,
      name: "Custom Sippers",
      description: "Reusable sippers with personalized branding",
      image: Sipper,
      alt: "Reusable water bottle",
      icon: "Bottle",
      features: ["Leak Proof", "Reusable", "Custom Prints"]
    },
    {
      id: 10,
      name: "Tote bags",
      description: "Reliable marking solutions for daily use",
      image: Tote,
      alt: "Customized printed tote bags for every use",
      icon: "Tag",
      features: ["Good quality print", "Good Material", "Bulk Supply"]
    },    
    {
      id: 11,
      name: "Crystal Frames",
      description: "Premium crystal frames with laser-sharp photo engraving",
      image: Crystal,
      alt: "Glass photo frame on desk",
      icon: "Image",
      features: ["Premium Finish", "Gift Ready", "Long Lasting"]
    }    
  ];

  const handleWhatsAppInquiry = (serviceName) => {
    const message = encodeURIComponent(`Hi Satya! I'm interested in your ${serviceName} service. Can you provide more details and pricing?`);
    window.open(`https://wa.me/917992801158?text=${message}`, '_blank');
  };

  return (
    <section
      className="py-16 lg:py-24 text-white"
      /* fallback inline gradient so you immediately see the navy->black blend before Tailwind rebuild */
      style={{
        background:
          "linear-gradient(135deg, #061630 0%, #081426 35%, #000000 100%)",
      }}
    >
      {/* Use the tailwind bg-print-gradient utility when available for consistent theming */}
      <div className="bg-print-gradient/100">
        <div className="container-brand">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-12 lg:mb-16">
            <div className="inline-flex items-center space-x-2 bg-brand-energy/10 text-brand-energy px-4 py-2 rounded-full text-sm font-medium">
              <Icon name="Package" size={16} />
              <span>Our Services</span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Bring Your Ideas to Life
            </h2>

            <p className="text-base text-white/85 max-w-2xl mx-auto">
              From custom apparel to promotional materials, we offer comprehensive printing solutions
              that transform your vision into reality with exceptional quality and attention to detail.
            </p>
          </div>

          {/* Services Grid: responsive 1 / 2 / 3 cols */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service) => (
              <article key={service.id} className="group relative">
                {/* Card: same structure as original, white card with subtle border + shadow */}
                <div className="h-full overflow-hidden rounded-2xl bg-white text-slate-900 border border-slate-100 shadow-md transition-shadow duration-300 hover:shadow-brand-lg">
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute top-4 right-4 z-10 bg-yellow-300 text-black px-3 py-1 rounded-full text-xs font-semibold">
                      Most Popular
                    </div>
                  )}

                  {/* Image */}
                  <div className="relative overflow-hidden h-88 bg-gray-100">
                    <Image
                      src={`${service.image}?q=80&w=1400&auto=format&fit=crop`}
                      alt={service.alt}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* subtle dark gradient overlay on hover for readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/0 to-black/10 opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center bg-brand-energy/10">
                        <Icon name={service.icon} size={20} className="text-brand-energy" />
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900 group-hover:text-brand-energy transition-colors">
                        {service.name}
                      </h3>
                    </div>

                    <p className="text-sm text-slate-700 leading-relaxed">
                      {service.description}
                    </p> 

                    {/* Features */}  
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 px-2 py-1 bg-slate-50 text-slate-700 text-xs rounded-md"
                        >
                          <Icon name="Check" size={12} className="text-success" />
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 pt-2">
                      <Button
                        variant="outline"
                        size="sm"
                        iconName="MessageCircle"
                        iconPosition="left"
                        onClick={() => handleWhatsAppInquiry(service.name)}
                        className="flex-1 text-xs bg-transparent border hover:bg-primary border-slate-900 text-slate-900 "
                      >
                        Get Quote
                      </Button>

                      <Link to="/services" className="flex-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          iconName="ArrowRight"
                          iconPosition="right"
                          className="bg-primary w-full text-xs text-white hover:bg-slate-50 hover:text-black "
                        >
                          Learn More
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* CTA Panel (uses your print gradient so it ties into page) */}
          <div className="text-center space-y-6">
            <div className="rounded-2xl p-8 lg:p-12 text-center bg-print-gradient/90 border border-black/20 shadow-lg">
              <div className="space-y-4 mb-8">
                <h3 className="text-2xl lg:text-3xl font-bold text-white">
                  Don't See What You Need?
                </h3>
                <p className="text-white/90 max-w-2xl mx-auto">
                  We specialize in custom solutions! Whether it's a unique product or special requirement,
                  our team can bring any printing idea to life.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/custom-order">
                  <Button
                    variant="solid"
                    size="lg"
                    iconName="Palette"
                    iconPosition="  left"
                    className="bg-yellow-300 text-black font-bold hover:bg-white hover:scale-105 transition-transform"
                  >
                    Custom Order
                  </Button>
                </Link>

                <Link to="/services">
                  <Button
                    variant="outline"
                    size="lg"
                    iconName="Grid"
                    iconPosition="left"
                    className="border-white text-white hover:bg-white hover:text-brand-energy"
                  >
                    View All Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
