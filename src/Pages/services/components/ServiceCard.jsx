import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ServiceCard = ({ service, onQuoteRequest, onLearnMore }) => {
  const {
    id,
    title,
    description,
    image,
    imageAlt,
    icon,
    features,
    startingPrice,
    turnaroundTime,
    isPopular,
    sampleProducts
  } = service;

  return (
    <div className={`card-brand group hover:scale-105 transition-all duration-300 ${
      isPopular ? 'ring-2 ring-brand-energy shadow-brand-lg' : ''
    }`}>
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute -top-3 left-6 bg-brand-energy text-white px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </div>
      )}
      {/* Service Image */}
      <div className="relative mb-6 rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Overlay with Icon */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
            <Icon name={icon} size={28} className="text-brand-energy" />
          </div>
        </div>

        {/* Price Badge */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-1">
          <span className="text-sm font-semibold text-brand-energy">From ₹{startingPrice}</span>
        </div>
      </div>
      {/* Content */}
      <div className="space-y-4">
        <div>
          <h3 className="text-brand-subtitle text-foreground mb-2">{title}</h3>
          <p className="text-brand-body text-muted-foreground">{description}</p>
        </div>

        {/* Features */}
        <div className="space-y-2">
          {features?.slice(0, 3)?.map((feature, index) => (
            <div key={index} className="flex items-center space-x-2">
              <Icon name="Check" size={16} className="text-success flex-shrink-0" />
              <span className="text-sm text-foreground">{feature}</span>
            </div>
          ))}
        </div>

        {/* Sample Products */}
        <div className="flex flex-wrap gap-2">
          {sampleProducts?.map((product, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-muted rounded-md text-xs text-muted-foreground"
            >
              {product}
            </span>
          ))}
        </div>

        {/* Turnaround Time */}
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Icon name="Clock" size={16} />
          <span>Delivery: {turnaroundTime}</span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <Button
            variant="default"
            size="sm"
            iconName="MessageCircle"
            iconPosition="left"
            onClick={() => onQuoteRequest(service)}
            className="flex-1"
          >
            Get Quote
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            iconName="ArrowRight"
            iconPosition="right"
            onClick={() => onLearnMore(service)}
            className="flex-1"
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;