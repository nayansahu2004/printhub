import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CustomerTestimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Event Organizer",
    company: "Creative Events Mumbai",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1f10a419e-1763296115132.png",
    avatarAlt: "Professional headshot of Indian woman with long black hair wearing blue blazer, smiling at camera",
    rating: 5,
    text: `PrintHub Pro exceeded our expectations for our company's annual event. The custom t-shirts were delivered on time with exceptional quality. Papu's attention to detail and customer service is outstanding. We've already placed our next order!`,
    service: "Custom T-Shirt Printing",
    orderSize: "150 pieces",
    projectImage: "https://images.unsplash.com/photo-1690988550344-3590d72c17ff",
    projectImageAlt: "Group of employees wearing matching custom printed t-shirts with company logo at corporate event"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    role: "Small Business Owner",
    company: "Kumar Electronics",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_156c0cee4-1763292921211.png",
    avatarAlt: "Professional headshot of middle-aged Indian man with mustache wearing white shirt, confident expression",
    rating: 5,
    text: `The promotional mugs and keychains for my electronics store were perfect! Great quality at competitive prices. The WhatsApp ordering process made everything so convenient. Highly recommend PrintHub Pro for any business promotional needs.`,
    service: "Promotional Items",
    orderSize: "200 pieces",
    projectImage: "https://img.rocket.new/generatedImages/rocket_gen_img_14795e7ae-1763379622636.png",
    projectImageAlt: "Collection of branded promotional mugs and keychains with electronics store logo displayed on counter"
  },
  {
    id: 3,
    name: "Anita Desai",
    role: "Team Captain",
    company: "Pune Warriors Cricket Club",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_12526c255-1763300474925.png",
    avatarAlt: "Athletic Indian woman with short hair wearing sports jersey, determined expression in outdoor setting",
    rating: 5,
    text: `Our cricket team jerseys came out amazing! The fabric quality is excellent and the printing hasn't faded even after multiple washes. PrintHub Pro understood our requirements perfectly and delivered exactly what we wanted.`,
    service: "Team Jerseys",
    orderSize: "25 pieces",
    projectImage: "https://img.rocket.new/generatedImages/rocket_gen_img_18a78ffe4-1763295376156.png",
    projectImageAlt: "Cricket team wearing matching custom jerseys with team logo and player names on field"
  },
  {
    id: 4,
    name: "Vikram Singh",
    role: "Content Creator",
    company: "@vikramcreates",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1aca0fbf3-1763293623203.png",
    avatarAlt: "Young Indian man with trendy haircut wearing casual t-shirt, creative expression while holding camera",
    rating: 5,
    text: `As a content creator, I needed unique merchandise for my followers. PrintHub Pro helped me create custom phone cases and mugs with my brand design. The quality is top-notch and my audience loves them! Fast delivery too.`,
    service: "Custom Merchandise",
    orderSize: "75 pieces",
    projectImage: "https://images.unsplash.com/photo-1493914002272-bf3ce93d52e7",
    projectImageAlt: "Influencer holding custom branded phone case and mug with personal logo design for social media content"
  }];


  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  const currentTestimonial = testimonials?.[activeTestimonial];

  return (
    <section className="py-16 bg-background">
      <div className="container-brand">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 text-brand-energy mb-4">
            <Icon name="Star" size={24} />
            <span className="text-sm font-medium uppercase tracking-wider">Customer Stories</span>
          </div>
          
          <h2 className="text-brand-title text-foreground mb-4">
            What Our Customers Say
          </h2>
          
          <p className="text-brand-body text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experience with PrintHub Pro.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-neutral-lg">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Testimonial Content */}
              <div className="space-y-6">
                {/* Rating */}
                <div className="flex items-center space-x-1">
                  {[...Array(currentTestimonial?.rating)]?.map((_, i) =>
                  <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-current" />
                  )}
                </div>

                {/* Quote */}
                <blockquote className="text-lg text-foreground leading-relaxed">
                  "{currentTestimonial?.text}"
                </blockquote>

                {/* Customer Info */}
                <div className="flex items-center space-x-4">
                  <Image
                    src={currentTestimonial?.avatar}
                    alt={currentTestimonial?.avatarAlt}
                    className="w-16 h-16 rounded-full object-cover" />

                  
                  <div>
                    <div className="font-semibold text-foreground">
                      {currentTestimonial?.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {currentTestimonial?.role}
                    </div>
                    <div className="text-sm text-brand-energy">
                      {currentTestimonial?.company}
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="flex flex-wrap gap-4 pt-4 border-t border-border">
                  <div className="flex items-center space-x-2">
                    <Icon name="Package" size={16} className="text-brand-energy" />
                    <span className="text-sm text-muted-foreground">
                      {currentTestimonial?.service}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Hash" size={16} className="text-brand-energy" />
                    <span className="text-sm text-muted-foreground">
                      {currentTestimonial?.orderSize}
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Image */}
              <div className="relative">
                <div className="rounded-xl overflow-hidden shadow-neutral">
                  <Image
                    src={currentTestimonial?.projectImage}
                    alt={currentTestimonial?.projectImageAlt}
                    className="w-full h-64 object-cover" />

                </div>
                
                {/* Quality Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-2 shadow-neutral">
                  <div className="flex items-center space-x-1">
                    <Icon name="Award" size={16} className="text-brand-energy" />
                    <span className="text-xs font-medium text-foreground">Quality Work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white border border-border rounded-full flex items-center justify-center hover:bg-muted transition-colors duration-200">

              <Icon name="ChevronLeft" size={20} className="text-foreground" />
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials?.map((_, index) =>
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === activeTestimonial ? 'bg-brand-energy' : 'bg-border'}`
                } />

              )}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white border border-border rounded-full flex items-center justify-center hover:bg-muted transition-colors duration-200">

              <Icon name="ChevronRight" size={20} className="text-foreground" />
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-energy mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-energy mb-2">4.9/5</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-energy mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Repeat Customers</div>
          </div>
        </div>
      </div>
    </section>);

};

export default CustomerTestimonials;