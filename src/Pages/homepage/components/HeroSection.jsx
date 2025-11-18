import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1586988004260-636c32112131",
    alt: "Custom printed white t-shirt with colorful geometric design being held up in modern printing studio",
    title: "Your Vision, Our Craft",
    subtitle: "Transform everyday items into meaningful, personalized treasures",
    cta: "Start Creating"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1591617702136-6cd45bbd51ac",
    alt: "Collection of custom printed mugs with various colorful designs and logos arranged on wooden table",
    title: "Personalization Perfected",
    subtitle: "Expert printing and sublimation services for gifts, events, and self-expression",
    cta: "Explore Services"
  },
  {
    id: 3,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_18a114267-1763379621892.png",
    alt: "Professional printing equipment with custom phone cases being produced showing vibrant color printing process",
    title: "From Blank to Beautiful",
    subtitle: "Where every blank canvas becomes a story waiting to be told",
    cta: "View Gallery"
  }];


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides?.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [heroSlides?.length]);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi Satya! I saw your amazing work on the website. I'd love to discuss a custom printing project. Can you help me get started?");
    window.open(`https://wa.me/919937643338?text=${message}`, '_blank');
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides?.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides?.length) % heroSlides?.length);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-canvas">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {heroSlides?.map((slide, index) =>
        <div
          key={slide?.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
          index === currentSlide ? 'opacity-100' : 'opacity-0'}`
          }>

            <div className="relative w-full h-full overflow-hidden">
              <Image
              src={slide?.image}
              alt={slide?.alt}
              className="w-full h-full object-cover" />

              <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/40"></div>
            </div>
          </div>
        )}
      </div>
      {/* Content */}
      <div className="relative z-10 container-brand">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-brand-energy/10 text-brand-energy px-4 py-2 rounded-full text-sm font-medium">
                <Icon name="Sparkles" size={16} />
                <span>Since September 2024</span>
              </div>
              
              <h1 className="text-brand-hero text-foreground leading-tight">
                {heroSlides?.[currentSlide]?.title}
              </h1>
              
              <p className="text-brand-subtitle text-muted-foreground max-w-2xl">
                {heroSlides?.[currentSlide]?.subtitle}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="default"
                size="lg"
                iconName="MessageCircle"
                iconPosition="left"
                onClick={handleWhatsAppClick}
                className="btn-whatsapp text-lg px-8 py-4">

                Chat with Satya Now
              </Button>
              
              <Link to="/services">
                <Button
                  variant="outline"
                  size="lg"
                  iconName="ArrowRight"
                  iconPosition="right"
                  className="w-full sm:w-auto text-lg px-8 py-4">

                  {heroSlides?.[currentSlide]?.cta}
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Icon name="Shield" size={16} className="text-success" />
                <span>Quality Guaranteed</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Icon name="Clock" size={16} className="text-brand-energy" />
                <span>Fast Turnaround</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Icon name="Heart" size={16} className="text-destructive" />
                <span>100+ Happy Customers</span>
              </div>
            </div>
          </div>

          {/* Right Content - Featured Work Preview */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="card-brand-elevated overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1715787940712-aa4ced280e37"
                      alt="Custom printed black hoodie with white logo design displayed on mannequin in bright studio"
                      className="w-full h-48 object-cover" />

                    <div className="p-4">
                      <h3 className="font-semibold text-sm">Custom Hoodies</h3>
                      <p className="text-xs text-muted-foreground">Premium Quality</p>
                    </div>
                  </div>
                  
                  <div className="card-brand-elevated overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1678930427386-94874763acab"
                      alt="Colorful custom printed phone cases with various artistic designs arranged in a row"
                      className="w-full h-32 object-cover" />

                    <div className="p-3">
                      <h3 className="font-semibold text-sm">Phone Cases</h3>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4 pt-8">
                  <div className="card-brand-elevated overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1529155784585-a840631d643b"
                      alt="White ceramic mug with custom colorful mandala design being held in hands against neutral background"
                      className="w-full h-32 object-cover" />

                    <div className="p-3">
                      <h3 className="font-semibold text-sm">Custom Mugs</h3>
                    </div>
                  </div>
                  
                  <div className="card-brand-elevated overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1599637132648-1f78cee9b7d7"
                      alt="Custom printed white t-shirt with vibrant tropical design laid flat on wooden surface"
                      className="w-full h-48 object-cover" />

                    <div className="p-4">
                      <h3 className="font-semibold text-sm">T-Shirts</h3>
                      <p className="text-xs text-muted-foreground">All Sizes Available</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-brand-energy text-brand-energy-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-brand animate-pulse">
                New Designs Weekly!
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Slide Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            iconName="ChevronLeft"
            onClick={prevSlide}
            className="bg-background/80 backdrop-blur-sm hover:bg-background" />

          
          <div className="flex space-x-2">
            {heroSlides?.map((_, index) =>
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ?
              'bg-brand-energy scale-125' : 'bg-background/60 hover:bg-background/80'}`
              } />

            )}
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            iconName="ChevronRight"
            onClick={nextSlide}
            className="bg-background/80 backdrop-blur-sm hover:bg-background" />

        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 hidden lg:block">
        <div className="flex flex-col items-center space-y-2 text-muted-foreground">
          <span className="text-xs">Scroll to explore</span>
          <Icon name="ChevronDown" size={20} className="animate-bounce" />
        </div>
      </div>
    </section>);

};

export default HeroSection;