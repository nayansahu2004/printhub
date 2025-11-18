import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const AboutPreview = () => {
  const stats = [
  {
    id: 1,
    number: "100+",
    label: "Happy Customers",
    icon: "Users",
    description: "Satisfied clients across various industries"
  },
  {
    id: 2,
    number: "500+",
    label: "Projects Completed",
    icon: "CheckCircle",
    description: "Custom printing projects delivered"
  },
  {
    id: 3,
    number: "3",
    label: "Months Experience",
    icon: "Calendar",
    description: "Since September 2024"
  },
  {
    id: 4,
    number: "24/7",
    label: "WhatsApp Support",
    icon: "MessageCircle",
    description: "Always available for consultations"
  }];


  const values = [
  {
    id: 1,
    title: "Quality First",
    description: "Every product meets our high standards before delivery",
    icon: "Shield",
    color: "text-success"
  },
  {
    id: 2,
    title: "Personal Touch",
    description: "Direct communication with founder Papu for personalized service",
    icon: "Heart",
    color: "text-destructive"
  },
  {
    id: 3,
    title: "Fast Turnaround",
    description: "Quick delivery without compromising on quality",
    icon: "Zap",
    color: "text-warning"
  },
  {
    id: 4,
    title: "Creative Solutions",
    description: "Innovative approaches to bring your unique ideas to life",
    icon: "Lightbulb",
    color: "text-brand-energy"
  }];


  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi Papu! I'd love to learn more about PrintHub Pro and discuss a potential project. Can we chat?");
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container-brand">
        {/* Main About Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-brand-energy/10 text-brand-energy px-4 py-2 rounded-full text-sm font-medium">
                <Icon name="User" size={16} />
                <span>Meet the Founder</span>
              </div>
              
              <h2 className="text-brand-title text-foreground">
                The Story Behind PrintHub Pro
              </h2>
              
              <p className="text-brand-body text-muted-foreground leading-relaxed">
                Founded in September 2024 by Satya Prakash Subudhi (Papu), PrintHub Pro represents 
                fresh energy in the customization space. We believe every blank canvas is a story 
                waiting to be told, and we're here to help you tell yours.
              </p>
              
              <p className="text-brand-body text-muted-foreground leading-relaxed">
                Our mission is simple: transform your unique ideas into meaningful, personalized 
                treasures through expert printing and sublimation services. We're not just another print shop – we're your creative partners in bringing visions to life.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {values?.map((value) =>
              <div key={value?.id} className="flex items-start space-x-3 p-4 bg-muted/50 rounded-lg">
                  <div className={`flex-shrink-0 w-8 h-8 rounded-lg bg-background flex items-center justify-center ${value?.color}`}>
                    <Icon name={value?.icon} size={16} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-semibold text-sm text-foreground">{value?.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{value?.description}</p>
                  </div>
                </div>
              )}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                iconName="MessageCircle"
                iconPosition="left"
                onClick={handleWhatsAppClick}
                className="btn-whatsapp">

                Chat with Papu
              </Button>
              
              <Link to="/about">
                <Button
                  variant="outline"
                  size="lg"
                  iconName="ArrowRight"
                  iconPosition="right"
                  className="w-full sm:w-auto">

                  Full Story
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content - Founder Image & Workshop */}
          <div className="space-y-6">
            <div className="relative">
              <div className="card-brand-elevated overflow-hidden">
                <Image
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_161215415-1763379621327.png"
                  alt="Modern printing workshop with professional equipment and custom printed products displayed on work tables"
                  className="w-full h-80 object-cover" />

                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-background/90 backdrop-blur-sm rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-1">Our Workshop</h3>
                    <p className="text-sm text-muted-foreground">State-of-the-art printing equipment for premium quality results</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-brand-energy text-brand-energy-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-brand">
                Est. Sept 2024
              </div>
            </div>

            {/* Process Steps */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-brand-energy/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="MessageSquare" size={20} className="text-brand-energy" />
                </div>
                <h4 className="font-semibold text-sm text-foreground">Discuss</h4>
                <p className="text-xs text-muted-foreground">Share your vision</p>
              </div>
              
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-brand-energy/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Palette" size={20} className="text-brand-energy" />
                </div>
                <h4 className="font-semibold text-sm text-foreground">Design</h4>
                <p className="text-xs text-muted-foreground">Create together</p>
              </div>
              
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-brand-energy/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Package" size={20} className="text-brand-energy" />
                </div>
                <h4 className="font-semibold text-sm text-foreground">Deliver</h4>
                <p className="text-xs text-muted-foreground">Perfect results</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-brand rounded-2xl p-8 lg:p-12">
          <div className="text-center space-y-4 mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white">
              Growing Strong Since Day One
            </h3>
            <p className="text-white/90 max-w-2xl mx-auto">
              In just a few months, we've built a reputation for excellence and customer satisfaction. 
              Here's what we've achieved together with our amazing clients.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats?.map((stat) =>
            <div key={stat?.id} className="text-center space-y-3">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                  <Icon name={stat?.icon} size={24} className="text-white" />
                </div>
                <div className="space-y-1">
                  <div className="text-3xl lg:text-4xl font-bold text-white">{stat?.number}</div>
                  <div className="text-lg font-semibold text-white">{stat?.label}</div>
                  <div className="text-sm text-white/80">{stat?.description}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

};

export default AboutPreview;