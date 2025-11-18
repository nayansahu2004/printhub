import React, { useState, useEffect } from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Event Organizer",
    company: "Celebration Events",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f10a419e-1763296115132.png",
    alt: "Professional headshot of Indian woman with long black hair wearing blue blazer smiling at camera",
    rating: 5,
    testimonial: `Papu and his team at PrintHub Pro exceeded all our expectations! We needed custom t-shirts for a corporate event with tight deadlines. Not only did they deliver on time, but the quality was outstanding. The prints were vibrant, durable, and exactly what we envisioned. The WhatsApp communication made everything so convenient. Highly recommended!`,
    project: "Corporate Event T-Shirts",
    date: "November 2024"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    role: "Restaurant Owner",
    company: "Spice Garden Restaurant",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f1fec346-1763292547881.png",
    alt: "Professional headshot of Indian man with beard wearing white shirt and dark jacket in office setting",
    rating: 5,
    testimonial: `Amazing work on our restaurant's menu boards and signage! Papu understood our vision perfectly and created designs that truly represent our brand. The large format printing quality is exceptional, and our customers constantly compliment the professional look. The personal attention and quick turnaround made all the difference.`,
    project: "Restaurant Signage & Menu Boards",
    date: "October 2024"
  },
  {
    id: 3,
    name: "Anita Patel",
    role: "Gift Shop Owner",
    company: "Memories & More",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_150f6571f-1763295390409.png",
    alt: "Professional headshot of Indian woman with shoulder-length hair wearing red traditional top smiling warmly",
    rating: 5,
    testimonial: `PrintHub Pro has become our go-to partner for custom mugs and personalized gifts. The attention to detail is incredible, and Papu always goes the extra mile to ensure customer satisfaction. Our customers love the quality, and we've seen a significant increase in repeat orders. The pricing is fair, and the service is exceptional.`,
    project: "Custom Mugs & Personalized Gifts",
    date: "November 2024"
  },
  {
    id: 4,
    name: "Vikram Singh",
    role: "Cricket Team Captain",
    company: "City Warriors Cricket Club",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1bcc1a022-1763301360210.png",
    alt: "Professional headshot of Indian man with short hair wearing blue sports jersey smiling confidently",
    rating: 5,
    testimonial: `Our cricket team needed custom jerseys with specific designs and player names. PrintHub Pro delivered exactly what we wanted! The fabric quality is excellent, the prints are sharp and vibrant, and they've held up perfectly through multiple matches and washes. Papu's dedication to getting every detail right is commendable.`,
    project: "Custom Cricket Team Jerseys",
    date: "October 2024"
  }];


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [testimonials?.length]);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi Papu! I read the amazing testimonials on your website. I'd like to discuss my custom printing needs. Can you help?");
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) =>
    <Icon
      key={index}
      name="Star"
      size={16}
      className={index < rating ? "text-warning fill-current" : "text-muted-foreground"} />

    );
  };

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container-brand">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-energy/10 text-brand-energy px-4 py-2 rounded-full text-sm font-medium">
            <Icon name="MessageSquare" size={16} />
            <span>Customer Stories</span>
          </div>
          
          <h2 className="text-brand-title text-foreground">
            What Our Customers Say
          </h2>
          
          <p className="text-brand-body text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say 
            about their experience with PrintHub Pro and the quality of our work.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <div className="card-brand-elevated p-8 lg:p-12 text-center">
            {/* Customer Image */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-brand-energy/20">
                  <Image
                    src={testimonials?.[currentTestimonial]?.image}
                    alt={testimonials?.[currentTestimonial]?.alt}
                    className="w-full h-full object-cover" />

                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-brand-energy rounded-full flex items-center justify-center">
                  <Icon name="Quote" size={14} className="text-brand-energy-foreground" />
                </div>
              </div>
            </div>

            {/* Rating */}
            <div className="flex justify-center space-x-1 mb-4">
              {renderStars(testimonials?.[currentTestimonial]?.rating)}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-lg lg:text-xl text-foreground leading-relaxed mb-6 font-medium">
              "{testimonials?.[currentTestimonial]?.testimonial}"
            </blockquote>

            {/* Customer Info */}
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-foreground">
                {testimonials?.[currentTestimonial]?.name}
              </h4>
              <p className="text-sm text-muted-foreground">
                {testimonials?.[currentTestimonial]?.role} at {testimonials?.[currentTestimonial]?.company}
              </p>
              <div className="flex items-center justify-center space-x-4 text-xs text-muted-foreground">
                <span className="flex items-center space-x-1">
                  <Icon name="Package" size={12} />
                  <span>{testimonials?.[currentTestimonial]?.project}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Icon name="Calendar" size={12} />
                  <span>{testimonials?.[currentTestimonial]?.date}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="ghost"
            size="icon"
            iconName="ChevronLeft"
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background shadow-neutral" />

          
          <Button
            variant="ghost"
            size="icon"
            iconName="ChevronRight"
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background shadow-neutral" />

        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-2 mb-12">
          {testimonials?.map((_, index) =>
          <button
            key={index}
            onClick={() => goToTestimonial(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
            index === currentTestimonial ?
            'bg-brand-energy scale-125' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'}`
            } />

          )}
        </div>

        {/* All Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {testimonials?.map((testimonial, index) =>
          <div
            key={testimonial?.id}
            className={`card-brand p-6 cursor-pointer transition-all duration-300 ${
            index === currentTestimonial ?
            'ring-2 ring-brand-energy shadow-brand-lg' :
            'hover:shadow-neutral-lg'}`
            }
            onClick={() => goToTestimonial(index)}>

              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image
                  src={testimonial?.image}
                  alt={testimonial?.alt}
                  className="w-full h-full object-cover" />

                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm text-foreground truncate">
                    {testimonial?.name}
                  </h4>
                  <p className="text-xs text-muted-foreground truncate">
                    {testimonial?.company}
                  </p>
                </div>
              </div>

              <div className="flex space-x-1 mb-3">
                {renderStars(testimonial?.rating)}
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                {testimonial?.testimonial}
              </p>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-card border border-border rounded-2xl p-8 lg:p-12">
            <div className="space-y-4 mb-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                Ready to Join Our Happy Customers?
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Experience the same level of quality, service, and satisfaction that our customers rave about. 
                Let's start your custom printing journey today!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                iconName="MessageCircle"
                iconPosition="left"
                onClick={handleWhatsAppClick}
                className="btn-whatsapp">

                Start Your Project
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                iconName="Star"
                iconPosition="left"
                onClick={() => goToTestimonial(0)}>

                Read More Reviews
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default TestimonialsSection;