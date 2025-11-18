import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PricingComparison = ({ onWhatsAppClick }) => {
  const [selectedQuantity, setSelectedQuantity] = useState('50');

  const quantities = [
    { value: '1', label: '1-10 pcs' },
    { value: '25', label: '11-25 pcs' },
    { value: '50', label: '26-50 pcs' },
    { value: '100', label: '51-100 pcs' },
    { value: '500', label: '100+ pcs' }
  ];

  const pricingData = {
    '1': {
      tshirt: { price: 399, discount: 0 },
      mug: { price: 249, discount: 0 },
      keychain: { price: 99, discount: 0 },
      phonecase: { price: 499, discount: 0 }
    },
    '25': {
      tshirt: { price: 349, discount: 12 },
      mug: { price: 199, discount: 20 },
      keychain: { price: 79, discount: 20 },
      phonecase: { price: 449, discount: 10 }
    },
    '50': {
      tshirt: { price: 299, discount: 25 },
      mug: { price: 179, discount: 28 },
      keychain: { price: 69, discount: 30 },
      phonecase: { price: 399, discount: 20 }
    },
    '100': {
      tshirt: { price: 249, discount: 37 },
      mug: { price: 149, discount: 40 },
      keychain: { price: 59, discount: 40 },
      phonecase: { price: 349, discount: 30 }
    },
    '500': {
      tshirt: { price: 199, discount: 50 },
      mug: { price: 119, discount: 52 },
      keychain: { price: 49, discount: 50 },
      phonecase: { price: 299, discount: 40 }
    }
  };

  const products = [
    {
      id: 'tshirt',
      name: 'Custom T-Shirts',
      icon: 'Shirt',
      features: ['Premium Cotton', 'Fade Resistant', 'Multiple Sizes'],
      popular: true
    },
    {
      id: 'mug',
      name: 'Personalized Mugs',
      icon: 'Coffee',
      features: ['Ceramic Quality', 'Dishwasher Safe', 'Photo Print'],
      popular: false
    },
    {
      id: 'keychain',
      name: 'Custom Keychains',
      icon: 'Key',
      features: ['Durable Material', 'Laser Engraved', 'Quick Delivery'],
      popular: false
    },
    {
      id: 'phonecase',
      name: 'Phone Cases',
      icon: 'Smartphone',
      features: ['All Models', 'Drop Protection', 'HD Printing'],
      popular: true
    }
  ];

  const currentPricing = pricingData?.[selectedQuantity];

  return (
    <section className="py-16 bg-canvas">
      <div className="container-brand">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 text-brand-energy mb-4">
            <Icon name="Calculator" size={24} />
            <span className="text-sm font-medium uppercase tracking-wider">Transparent Pricing</span>
          </div>
          
          <h2 className="text-brand-title text-foreground mb-4">
            Affordable Pricing for Every Budget
          </h2>
          
          <p className="text-brand-body text-muted-foreground max-w-2xl mx-auto">
            Our pricing is transparent and competitive. The more you order, the more you save with our bulk discounts.
          </p>
        </div>

        {/* Quantity Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {quantities?.map((quantity) => (
            <button
              key={quantity?.value}
              onClick={() => setSelectedQuantity(quantity?.value)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedQuantity === quantity?.value
                  ? 'bg-brand-energy text-white shadow-brand'
                  : 'bg-white text-foreground hover:bg-muted border border-border'
              }`}
            >
              {quantity?.label}
            </button>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products?.map((product) => {
            const pricing = currentPricing?.[product?.id];
            const originalPrice = pricingData?.['1']?.[product?.id]?.price;
            
            return (
              <div
                key={product?.id}
                className={`card-brand relative ${
                  product?.popular ? 'ring-2 ring-brand-energy shadow-brand-lg' : ''
                }`}
              >
                {/* Popular Badge */}
                {product?.popular && (
                  <div className="absolute -top-3 left-6 bg-brand-energy text-white px-3 py-1 rounded-full text-xs font-medium">
                    Popular
                  </div>
                )}
                {/* Product Header */}
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-brand-energy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={product?.icon} size={28} className="text-brand-energy" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {product?.name}
                  </h3>
                  
                  <div className="space-y-1">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-3xl font-bold text-brand-energy">
                        ₹{pricing?.price}
                      </span>
                      {pricing?.discount > 0 && (
                        <span className="text-sm text-muted-foreground line-through">
                          ₹{originalPrice}
                        </span>
                      )}
                    </div>
                    
                    {pricing?.discount > 0 && (
                      <div className="inline-flex items-center space-x-1 bg-success/10 text-success px-2 py-1 rounded-full text-xs font-medium">
                        <Icon name="TrendingDown" size={12} />
                        <span>{pricing?.discount}% OFF</span>
                      </div>
                    )}
                  </div>
                </div>
                {/* Features */}
                <div className="space-y-3 mb-6">
                  {product?.features?.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Icon name="Check" size={16} className="text-success flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                {/* CTA Button */}
                <Button
                  variant="outline"
                  fullWidth
                  iconName="MessageCircle"
                  iconPosition="left"
                  onClick={() => onWhatsAppClick(product?.name, pricing?.price)}
                  className="border-brand-energy text-brand-energy hover:bg-brand-energy hover:text-white"
                >
                  Get Quote
                </Button>
              </div>
            );
          })}
        </div>

        {/* Bulk Discount Info */}
        <div className="bg-gradient-brand rounded-2xl p-8 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Icon name="Percent" size={24} />
              <span className="text-sm font-medium uppercase tracking-wider">Special Offer</span>
            </div>
            
            <h3 className="text-2xl font-bold mb-4">
              Save Up to 50% on Bulk Orders
            </h3>
            
            <p className="text-white/90 mb-6">
              The more you order, the more you save! Perfect for events, teams, businesses, and special occasions.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold">25% OFF</div>
                <div className="text-sm text-white/80">Orders 25+</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">40% OFF</div>
                <div className="text-sm text-white/80">Orders 100+</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">50% OFF</div>
                <div className="text-sm text-white/80">Orders 500+</div>
              </div>
            </div>
            
            <Button
              variant="secondary"
              size="lg"
              iconName="Calculator"
              iconPosition="left"
              onClick={() => onWhatsAppClick('Bulk Order', 'Custom Quote')}
            >
              Calculate Bulk Savings
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingComparison;