import React, { useState, useEffect, useRef } from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Event Organizer",
      company: "Celebration Events",
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f10a419e-1763296115132.png",
      alt: "Professional headshot of Indian woman with long black hair wearing blue blazer smiling at camera",
      rating: 5,
      testimonial:
        `Papu and his team at PrintHub Pro exceeded all our expectations! We needed custom t-shirts for a corporate event with tight deadlines. Not only did they deliver on time, but the quality was outstanding. The prints were vibrant, durable, and exactly what we envisioned. The WhatsApp communication made everything so convenient. Highly recommended!`,
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
      testimonial:
        `Amazing work on our restaurant's menu boards and signage! Papu understood our vision perfectly and created designs that truly represent our brand. The large format printing quality is exceptional, and our customers constantly compliment the professional look. The personal attention and quick turnaround made all the difference.`,
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
      testimonial:
        `PrintHub Pro has become our go-to partner for custom mugs and personalized gifts. The attention to detail is incredible, and Papu always goes the extra mile to ensure customer satisfaction. Our customers love the quality, and we've seen a significant increase in repeat orders. The pricing is fair, and the service is exceptional.`,
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
      testimonial:
        `Our cricket team needed custom jerseys with specific designs and player names. PrintHub Pro delivered exactly what we wanted! The fabric quality is excellent, the prints are sharp and vibrant, and they've held up perfectly through multiple matches and washes. Papu's dedication to getting every detail right is commendable.`,
      project: "Custom Cricket Team Jerseys",
      date: "October 2024"
    }
  ];

  // simple autoplay
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((p) => (p + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(timerRef.current);
  }, [testimonials.length]);

  const goTo = (i) => {
    clearInterval(timerRef.current);
    setCurrent(i);
    // restart autoplay
    timerRef.current = setInterval(() => {
      setCurrent((p) => (p + 1) % testimonials.length);
    }, 8000);
  };

  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((p) => (p + 1) % testimonials.length);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hi Papu! I read the testimonials on your site. I'd like to discuss custom printing — can you help?"
    );
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  const renderStars = (rating) =>
    Array.from({ length: 5 }, (_, i) => (
      <Icon key={i} name="Star" size={16} className={i < rating ? 'text-warning' : 'text-muted-foreground'} />
    ));

  return (
    <section
      className="py-16 lg:py-24 relative overflow-hidden"
      style={{
        background: 'linear-gradient(120deg, rgba(8,37,64,1) 0%, rgba(4,12,20,1) 60%, rgba(0,0,0,1) 100%)'
      }}
    >
      {/* animated horizontal gradient */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            'linear-gradient(90deg, rgba(14,42,73,0.12) 0%, rgba(6,18,30,0.12) 35%, rgba(0,0,0,0.12) 100%)',
          backgroundSize: '200% 100%',
          animation: 'moveGradient 18s linear infinite'
        }}
      />

      <div className="container-brand relative z-10">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-white/10 text-yellow-300 px-4 py-2 rounded-full text-sm font-medium">
            <Icon name="MessageSquare" size={16} />
            <span>Customer Stories</span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-white">What Our Customers Say</h2>

          <p className="text-white/80 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experience with PrintHub Pro and the quality of our work.
          </p>
        </div>

        {/* Main testimonial */}
        <div className="relative max-w-4xl mx-auto mb-10">
          {testimonials.map((t, idx) => {
            const active = idx === current;
            return (
              <article
                key={t.id}
                aria-hidden={!active}
                aria-live={active ? 'polite' : 'off'}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  active ? 'opacity-100 translate-y-0 z-10' : 'opacity-0 translate-y-6 z-0 pointer-events-none'
                }`}
              >
                <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-yellow-100">
                        {/* don't pass unknown props to AppImage; keep simple */}
                        <Image src={t.image} alt={t.alt} className="w-full h-full object-cover" />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-9 h-9 rounded-full bg-yellow-300 flex items-center justify-center">
                        <Icon name="Quote" size={14} className="text-black" />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center space-x-1 mb-4">{renderStars(t.rating)}</div>

                  <blockquote className="text-lg lg:text-xl text-slate-800 leading-relaxed mb-6 font-medium">
                    “{t.testimonial}”
                  </blockquote>

                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-slate-900">{t.name}</h4>
                    <p className="text-sm text-slate-600">
                      {t.role} at {t.company}
                    </p>

                    <div className="flex items-center justify-center gap-6 text-xs text-slate-500 mt-3">
                      <span className="flex items-center gap-2">
                        <Icon name="Package" size={12} />
                        <span>{t.project}</span>
                      </span>
                      <span className="flex items-center gap-2">
                        <Icon name="Calendar" size={12} />
                        <span>{t.date}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}

          {/* arrows */}
          <button
            aria-label="Previous testimonial"
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 shadow-md hover:scale-105 transition-transform hidden sm:inline-flex"
          >
            <Icon name="ChevronLeft" size={18} className="text-slate-800" />
          </button>

          <button
            aria-label="Next testimonial"
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 shadow-md hover:scale-105 transition-transform hidden sm:inline-flex"
          >
            <Icon name="ChevronRight" size={18} className="text-slate-800" />
          </button>
        </div>

        {/* indicators */}
        <div className="flex justify-center gap-3 mb-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === current ? 'bg-yellow-300 scale-125' : 'bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>

        {/* mini grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {testimonials.map((t, idx) => {
            const active = idx === current;
            return (
              <button
                key={t.id}
                onClick={() => goTo(idx)}
                className={`text-left rounded-2xl p-5 transition-all duration-300 bg-white ${
                  active ? 'ring-2 ring-yellow-300 shadow-lg' : 'hover:shadow-md'
                }`}
                aria-pressed={active}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image src={t.image} alt={t.alt} className="w-full h-full object-cover" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-slate-900 truncate">{t.name}</div>
                    <div className="text-xs text-slate-500 truncate">{t.company}</div>
                  </div>
                </div>

                <div className="flex mb-2">{renderStars(t.rating)}</div>

                <p className="text-sm text-slate-600" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {t.testimonial}
                </p>
              </button>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="rounded-2xl p-8 lg:p-12 bg-white/5 backdrop-blur-sm border border-white/6">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">Ready to Join Our Happy Customers?</h3>
            <p className="text-white/80 max-w-2xl mx-auto mb-6">Experience the same level of quality, service, and satisfaction that our customers rave about. Let's start your custom printing journey today!</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                iconName="MessageCircle"
                iconPosition="left"
                onClick={handleWhatsAppClick}
                className="bg-yellow-300 text-black font-semibold hover:brightness-95"
              >
                Start Your Project
              </Button>

              <Button
                variant="outline"
                size="lg"
                iconName="Star"
                iconPosition="left"
                onClick={() => goTo(0)}
                className="border-white text-white hover:bg-white/10"
              >
                Read More Reviews
              </Button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes moveGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
