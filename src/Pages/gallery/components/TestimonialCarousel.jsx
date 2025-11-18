import React, { useState, useEffect } from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai, Maharashtra",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1e94201ef-1763296134446.png",
    avatarAlt: "Professional headshot of Indian woman with long black hair wearing white blouse",
    rating: 5,
    text: `PrintHub Pro transformed our wedding completely! Papu understood our vision perfectly and created custom t-shirts for our entire wedding party. The quality was exceptional and the designs were exactly what we dreamed of. Highly recommend for any special occasion!`,
    project: "Wedding Party T-Shirts",
    image: "https://images.unsplash.com/photo-1584012961506-b6fc4c9f3105",
    imageAlt: "Group of people wearing matching custom white t-shirts at outdoor wedding celebration"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Delhi, NCR",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_10742e8ef-1763296701959.png",
    avatarAlt: "Professional headshot of Indian man with short black hair in navy blue shirt",
    rating: 5,
    text: `As a startup founder, I needed branded merchandise that would make an impact. PrintHub Pro delivered beyond expectations! From custom mugs to branded bags, everything was perfect. The attention to detail and quick turnaround helped us launch our brand successfully.`,
    project: "Startup Branding Package",
    image: "https://images.unsplash.com/photo-1684987642087-f0a9756f282a",
    imageAlt: "Collection of branded merchandise including mugs, bags, and stationery on modern office desk"
  },
  {
    id: 3,
    name: "Anita Desai",
    location: "Bangalore, Karnataka",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1248a4355-1763295598278.png",
    avatarAlt: "Professional headshot of Indian woman with shoulder-length hair wearing blue blazer",
    rating: 5,
    text: `I wanted to surprise my husband with a custom photo mug for our anniversary. Papu made the entire process so smooth and the final product was absolutely beautiful! The print quality was amazing and it arrived exactly on time. Will definitely order again!`,
    project: "Anniversary Photo Mug",
    image: "https://images.unsplash.com/photo-1697065686935-2779af5cbddc",
    imageAlt: "White ceramic mug with custom photo print sitting on wooden table with coffee"
  },
  {
    id: 4,
    name: "Vikram Singh",
    location: "Pune, Maharashtra",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1221b5557-1763292864149.png",
    avatarAlt: "Professional headshot of Indian man with beard wearing white shirt and glasses",
    rating: 5,
    text: `Our cricket team needed custom jerseys for the tournament. PrintHub Pro not only delivered high-quality jerseys but also helped us with the design. The team looked professional and the jerseys were comfortable to play in. Excellent service from start to finish!`,
    project: "Cricket Team Jerseys",
    image: "https://images.unsplash.com/photo-1647332208410-4da856229cd4",
    imageAlt: "Cricket team wearing matching custom blue jerseys posing together on cricket field"
  }];


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
      prevIndex === testimonials?.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials?.length]);

  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials?.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex === testimonials?.length - 1 ? 0 : currentIndex + 1);
  };

  const currentTestimonial = testimonials?.[currentIndex];

  return (
    <div className="bg-card border border-border rounded-2xl p-8 mb-12 shadow-neutral">
      <div className="text-center mb-8">
        <h2 className="text-brand-title mb-4">
          What Our Customers Say
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Real stories from real customers who trusted us with their custom printing needs
        </p>
      </div>
      <div className="relative">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Project Image */}
          <div className="lg:w-1/3">
            <div className="aspect-video rounded-lg overflow-hidden shadow-neutral">
              <Image
                src={currentTestimonial?.image}
                alt={currentTestimonial?.imageAlt}
                className="w-full h-full object-cover" />

            </div>
          </div>

          {/* Testimonial Content */}
          <div className="lg:w-2/3 text-center lg:text-left">
            {/* Rating */}
            <div className="flex items-center justify-center lg:justify-start space-x-1 mb-4">
              {[...Array(5)]?.map((_, i) =>
              <Icon
                key={i}
                name="Star"
                size={20}
                className={i < currentTestimonial?.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'} />

              )}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-lg text-foreground mb-6 leading-relaxed">
              "{currentTestimonial?.text}"
            </blockquote>

            {/* Customer Info */}
            <div className="flex items-center justify-center lg:justify-start space-x-4">
              <Image
                src={currentTestimonial?.avatar}
                alt={currentTestimonial?.avatarAlt}
                className="w-12 h-12 rounded-full object-cover" />

              <div className="text-left">
                <p className="font-semibold text-foreground">
                  {currentTestimonial?.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {currentTestimonial?.location}
                </p>
                <p className="text-sm text-brand-energy font-medium">
                  {currentTestimonial?.project}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center mt-8 space-x-4">
          <Button
            variant="outline"
            size="icon"
            iconName="ChevronLeft"
            onClick={handlePrev} />

          
          {/* Dots Indicator */}
          <div className="flex space-x-2">
            {testimonials?.map((_, index) =>
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              index === currentIndex ? 'bg-brand-energy' : 'bg-muted'}`
              } />

            )}
          </div>
          
          <Button
            variant="outline"
            size="icon"
            iconName="ChevronRight"
            onClick={handleNext} />

        </div>
      </div>
    </div>);

};

export default TestimonialCarousel;