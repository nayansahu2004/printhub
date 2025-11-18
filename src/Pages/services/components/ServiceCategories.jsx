import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import ServiceCard from './ServiceCard';

const ServiceCategories = ({ onQuoteRequest, onLearnMore }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
  { id: 'all', name: 'All Services', icon: 'Grid3X3' },
  { id: 'apparel', name: 'Apparel', icon: 'Shirt' },
  { id: 'accessories', name: 'Accessories', icon: 'Watch' },
  { id: 'promotional', name: 'Promotional', icon: 'Gift' },
  { id: 'personalized', name: 'Personalized', icon: 'Heart' }];


  const services = [
  {
    id: 1,
    title: "Custom T-Shirt Printing",
    description: "High-quality custom t-shirts with your designs, logos, or text. Perfect for events, teams, or personal expression.",
    image: "https://images.unsplash.com/photo-1468824027069-ce49f7451281",
    imageAlt: "Collection of colorful custom printed t-shirts with various designs and logos displayed on hangers",
    icon: "Shirt",
    category: "apparel",
    features: [
    "Premium cotton fabric",
    "Fade-resistant printing",
    "Multiple size options",
    "Bulk order discounts"],

    startingPrice: "299",
    turnaroundTime: "2-3 days",
    isPopular: true,
    sampleProducts: ["Event Tees", "Team Jerseys", "Corporate Wear"]
  },
  {
    id: 2,
    title: "Personalized Mugs",
    description: "Custom ceramic mugs with photos, text, or designs. Dishwasher safe and perfect for gifts or office use.",
    image: "https://images.unsplash.com/photo-1730220594317-94a4358d013f",
    imageAlt: "White ceramic mug with custom photo print showing family portrait, placed on wooden table with coffee",
    icon: "Coffee",
    category: "personalized",
    features: [
    "Ceramic material",
    "Dishwasher safe",
    "Photo quality printing",
    "Gift box packaging"],

    startingPrice: "199",
    turnaroundTime: "1-2 days",
    isPopular: false,
    sampleProducts: ["Photo Mugs", "Quote Mugs", "Logo Mugs"]
  },
  {
    id: 3,
    title: "Custom Keychains",
    description: "Durable custom keychains in various materials. Great for promotional items or personalized gifts.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b6ac8098-1763379623272.png",
    imageAlt: "Assorted custom keychains including metal, acrylic, and leather varieties with different designs and logos",
    icon: "Key",
    category: "accessories",
    features: [
    "Multiple materials",
    "Laser engraving",
    "Bulk pricing available",
    "Quick production"],

    startingPrice: "49",
    turnaroundTime: "1 day",
    isPopular: false,
    sampleProducts: ["Metal Tags", "Acrylic Charms", "Leather Fobs"]
  },
  {
    id: 4,
    title: "Business Cards & Stationery",
    description: "Professional business cards and stationery items with premium finishes and custom designs.",
    image: "https://images.unsplash.com/photo-1513710281312-7a43f9cdbfcc",
    imageAlt: "Stack of elegant business cards with embossed logo and premium paper finish on marble surface",
    icon: "CreditCard",
    category: "promotional",
    features: [
    "Premium paper stock",
    "Multiple finishes",
    "Professional design",
    "Fast turnaround"],

    startingPrice: "499",
    turnaroundTime: "2-3 days",
    isPopular: false,
    sampleProducts: ["Business Cards", "Letterheads", "Envelopes"]
  },
  {
    id: 5,
    title: "Custom Phone Cases",
    description: "Protective phone cases with your custom designs. Available for all popular phone models.",
    image: "https://images.unsplash.com/photo-1557774058-c9148bc6e481",
    imageAlt: "Smartphone with custom printed case featuring colorful abstract design, displayed against modern background",
    icon: "Smartphone",
    category: "accessories",
    features: [
    "All phone models",
    "Durable protection",
    "HD printing quality",
    "Scratch resistant"],

    startingPrice: "399",
    turnaroundTime: "2-3 days",
    isPopular: true,
    sampleProducts: ["iPhone Cases", "Samsung Cases", "Custom Designs"]
  },
  {
    id: 6,
    title: "Promotional Banners",
    description: "Eye-catching banners for events, businesses, and promotions. Weather-resistant and vibrant colors.",
    image: "https://images.unsplash.com/photo-1732122629923-fb32bfe18697",
    imageAlt: "Large promotional banner with vibrant business branding displayed at outdoor event with people walking by",
    icon: "Flag",
    category: "promotional",
    features: [
    "Weather resistant",
    "Large format printing",
    "Vibrant colors",
    "Easy installation"],

    startingPrice: "899",
    turnaroundTime: "3-5 days",
    isPopular: false,
    sampleProducts: ["Event Banners", "Shop Signage", "Flex Boards"]
  }];


  const filteredServices = activeCategory === 'all' ?
  services :
  services?.filter((service) => service?.category === activeCategory);

  return (
    <section className="py-16 bg-canvas">
      <div className="container-brand">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-brand-title text-foreground mb-4">
            Our Premium Services
          </h2>
          <p className="text-brand-body text-muted-foreground max-w-2xl mx-auto">
            Discover our comprehensive range of customization services designed to bring your vision to life with exceptional quality and attention to detail.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories?.map((category) =>
          <button
            key={category?.id}
            onClick={() => setActiveCategory(category?.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
            activeCategory === category?.id ?
            'bg-brand-energy text-white shadow-brand' :
            'bg-white text-foreground hover:bg-muted border border-border'}`
            }>

              <Icon name={category?.icon} size={18} />
              <span>{category?.name}</span>
            </button>
          )}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices?.map((service) =>
          <ServiceCard
            key={service?.id}
            service={service}
            onQuoteRequest={onQuoteRequest}
            onLearnMore={onLearnMore} />

          )}
        </div>

        {/* Empty State */}
        {filteredServices?.length === 0 &&
        <div className="text-center py-12">
            <Icon name="Package" size={48} className="text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">No services found</h3>
            <p className="text-muted-foreground">Try selecting a different category to see available services.</p>
          </div>
        }
      </div>
    </section>);

};

export default ServiceCategories;