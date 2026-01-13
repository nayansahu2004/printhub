import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import ServiceCard from './ServiceCard';
import Button from '../../../components/ui/Button'
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
      title: "Custom T-Shirts",
      description: "Premium cotton t-shirts with vibrant, long-lasting custom prints suitable for branding, events, and personal wear.",
      image: Shirt,
      imageAlt: "Custom printed white t-shirt with colorful geometric design displayed on wooden background",
      icon: "Shirt",
      category: "apparel",
      features: ["Premium cotton", "All sizes available", "Vibrant colors", "Bulk orders supported"],
      startingPrice: "299",
      turnaroundTime: "2-3 days",
      isPopular: true,
      sampleProducts: ["College Merchandise", "Event Tees", "Brand Apparel"]
    },
    {
      id: 2,
      title: "Custom Cushions",
      description: "Soft and comfortable cushions with personalized prints, perfect for home décor and gifting.",
      image: Cushion,
      imageAlt: "Decorative cushions on modern sofa",
      icon: "Sofa",
      category: "home",
      features: ["Soft fabric", "Fade-resistant prints", "Custom designs", "Premium finish"],
      startingPrice: "399",
      turnaroundTime: "2-3 days",
      isPopular: false,
      sampleProducts: ["Home Décor", "Photo Cushions", "Gift Cushions"]
    },
    {
      id: 3,
      title: "Custom Aprons",
      description: "Durable printed aprons designed for kitchens, cafés, events, and professional use.",
      image: Apron,
      imageAlt: "Person wearing apron while cooking",
      icon: "UtensilsCrossed",
      category: "apparel",
      features: ["Durable fabric", "Wash safe", "Comfortable fit", "Long-lasting print"],
      startingPrice: "249",
      turnaroundTime: "1-2 days",
      isPopular: false,
      sampleProducts: ["Kitchen Aprons", "Café Uniforms", "Event Aprons"]
    },
    {
      id: 4,
      title: "Custom Hoodies",
      description: "Cozy and stylish hoodies with high-quality personalized prints for everyday comfort and fashion.",
      image: Hoodie,
      imageAlt: "Black hoodie with white custom logo print displayed on mannequin in modern studio setting",
      icon: "Zap",
      category: "apparel",
      features: ["Unisex fit", "Soft inner lining", "Durable print", "Winter-friendly"],
      startingPrice: "899",
      turnaroundTime: "3-4 days",
      isPopular: true,
      sampleProducts: ["College Hoodies", "Team Wear", "Brand Hoodies"]
    },
    {
      id: 5,
      title: "School Bags & Stationery",
      description: "Customized school bags and stationery items designed for students, schools, and institutions.",
      image: Bag,
      imageAlt: "School backpack with stationery",
      icon: "Backpack",
      category: "stationery",
      features: ["Student-friendly", "Custom branding", "Bulk supply", "Durable materials"],
      startingPrice: "499",
      turnaroundTime: "3-5 days",
      isPopular: false,
      sampleProducts: ["School Bags", "Notebooks", "Institutional Kits"]
    },
    {
      id: 6,
      title: "Sublimation T-Shirts",
      description: "High-resolution sublimation t-shirts offering photo-quality prints with excellent color accuracy.",
      image: Sublimation,
      imageAlt: "Graphic printed sublimation t-shirt",
      icon: "Palette",
      category: "apparel",
      features: ["Photo-quality prints", "No peeling", "Breathable fabric", "Color accuracy"],
      startingPrice: "349",
      turnaroundTime: "2-3 days",
      isPopular: false,
      sampleProducts: ["Graphic Tees", "Custom Artwork Tees", "Promotional Tees"]
    },
    {
      id: 7,
      title: "Sublimation Key Chains",
      description: "Compact and lightweight keychains with sharp sublimation prints for branding and gifting.",
      image: Key,
      imageAlt: "Keychain on wooden surface",
      icon: "KeyRound",
      category: "accessories",
      features: ["Lightweight", "Sharp prints", "Durable build", "Ideal for gifting"],
      startingPrice: "49",
      turnaroundTime: "1 day",
      isPopular: false,
      sampleProducts: ["Brand Keychains", "Event Giveaways", "Personalized Tags"]
    },
    {
      id: 8,
      title: "Printed Bedsheets & Curtains",
      description: "Elegant printed bedsheets and curtains crafted to enhance home interiors with custom designs.",
      image: Curtain,
      imageAlt: "Bedroom with printed bedsheets and curtains",
      icon: "BedDouble",
      category: "home",
      features: ["Soft fabric", "Color fastness", "Custom patterns", "Premium quality"],
      startingPrice: "1299",
      turnaroundTime: "4-6 days",
      isPopular: false,
      sampleProducts: ["Bedsheets", "Curtains", "Home Interior Sets"]
    },
    {
      id: 9,
      title: "Sublimation Mugs",
      description: "High-quality mugs with long-lasting sublimation prints suitable for personal and corporate use.",
      image: Mugs,
      imageAlt: "Coffee mug on table",
      icon: "Coffee",
      category: "personalized",
      features: ["Photo quality", "Heat resistant", "Glossy finish", "Long-lasting prints"],
      startingPrice: "199",
      turnaroundTime: "1-2 days",
      isPopular: false,
      sampleProducts: ["Photo Mugs", "Corporate Mugs", "Gift Mugs"]
    },
    {
      id: 10,
      title: "Custom Sippers",
      description: "Reusable sippers with personalized prints, ideal for branding, events, and daily hydration.",
      image: Sipper,
      imageAlt: "Reusable water bottle",
      icon: "Bottle",
      category: "accessories",
      features: ["Leak proof", "Reusable", "Custom branding", "Durable material"],
      startingPrice: "299",
      turnaroundTime: "2-3 days",
      isPopular: false,
      sampleProducts: ["Brand Sippers", "Event Merchandise", "Personal Use"]
    },
    {
      id: 11,
      title: "Tote Bags",
      description: "Stylish and durable tote bags with high-quality prints, perfect for daily use and bulk supply.",
      image: Tote,
      imageAlt: "Customized printed tote bags for every use",
      icon: "Tag",
      category: "accessories",
      features: ["Good material", "Quality printing", "Eco-friendly", "Bulk availability"],
      startingPrice: "199",
      turnaroundTime: "2-3 days",
      isPopular: false,
      sampleProducts: ["Shopping Bags", "Promotional Totes", "Custom Prints"]
    },
    {
      id: 12,
      title: "Crystal Frames",
      description: "Premium crystal frames with laser-sharp photo engraving, ideal for luxury gifting.",
      image: Crystal,
      imageAlt: "Glass photo frame on desk",
      icon: "Image",
      category: "personalized",
      features: ["Premium finish", "Laser engraving", "Gift ready", "Long lasting"],
      startingPrice: "999",
      turnaroundTime: "3-5 days",
      isPopular: false,
      sampleProducts: ["Photo Frames", "Award Frames", "Premium Gifts"]
    }
  ]
  
   


  // const services = [
  // {
  //   id: 1,
  //   title: "Custom T-Shirt Printing",
  //   description: "High-quality custom t-shirts with your designs, logos, or text. Perfect for events, teams, or personal expression.",
  //   image: "https://images.unsplash.com/photo-1468824027069-ce49f7451281",
  //   imageAlt: "Collection of colorful custom printed t-shirts with various designs and logos displayed on hangers",
  //   icon: "Shirt",
  //   category: "apparel",
  //   features: [
  //   "Premium cotton fabric",
  //   "Fade-resistant printing",
  //   "Multiple size options",
  //   "Bulk order discounts"],

  //   startingPrice: "299",
  //   turnaroundTime: "2-3 days",
  //   isPopular: true,
  //   sampleProducts: ["Event Tees", "Team Jerseys", "Corporate Wear"]
  // },
  // {
  //   id: 2,
  //   title: "Personalized Mugs",
  //   description: "Custom ceramic mugs with photos, text, or designs. Dishwasher safe and perfect for gifts or office use.",
  //   image: "https://images.unsplash.com/photo-1730220594317-94a4358d013f",
  //   imageAlt: "White ceramic mug with custom photo print showing family portrait, placed on wooden table with coffee",
  //   icon: "Coffee",
  //   category: "personalized",
  //   features: [
  //   "Ceramic material",
  //   "Dishwasher safe",
  //   "Photo quality printing",
  //   "Gift box packaging"],

  //   startingPrice: "199",
  //   turnaroundTime: "1-2 days",
  //   isPopular: false,
  //   sampleProducts: ["Photo Mugs", "Quote Mugs", "Logo Mugs"]
  // },
  // {
  //   id: 3,
  //   title: "Custom Keychains",
  //   description: "Durable custom keychains in various materials. Great for promotional items or personalized gifts.",
  //   image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b6ac8098-1763379623272.png",
  //   imageAlt: "Assorted custom keychains including metal, acrylic, and leather varieties with different designs and logos",
  //   icon: "Key",
  //   category: "accessories",
  //   features: [
  //   "Multiple materials",
  //   "Laser engraving",
  //   "Bulk pricing available",
  //   "Quick production"],

  //   startingPrice: "49",
  //   turnaroundTime: "1 day",
  //   isPopular: false,
  //   sampleProducts: ["Metal Tags", "Acrylic Charms", "Leather Fobs"]
  // },
  // {
  //   id: 4,
  //   title: "Business Cards & Stationery",
  //   description: "Professional business cards and stationery items with premium finishes and custom designs.",
  //   image: "https://images.unsplash.com/photo-1513710281312-7a43f9cdbfcc",
  //   imageAlt: "Stack of elegant business cards with embossed logo and premium paper finish on marble surface",
  //   icon: "CreditCard",
  //   category: "promotional",
  //   features: [
  //   "Premium paper stock",
  //   "Multiple finishes",
  //   "Professional design",
  //   "Fast turnaround"],

  //   startingPrice: "499",
  //   turnaroundTime: "2-3 days",
  //   isPopular: false,
  //   sampleProducts: ["Business Cards", "Letterheads", "Envelopes"]
  // },
  // {
  //   id: 5,
  //   title: "Custom Phone Cases",
  //   description: "Protective phone cases with your custom designs. Available for all popular phone models.",
  //   image: "https://images.unsplash.com/photo-1557774058-c9148bc6e481",
  //   imageAlt: "Smartphone with custom printed case featuring colorful abstract design, displayed against modern background",
  //   icon: "Smartphone",
  //   category: "accessories",
  //   features: [
  //   "All phone models",
  //   "Durable protection",
  //   "HD printing quality",
  //   "Scratch resistant"],

  //   startingPrice: "399",
  //   turnaroundTime: "2-3 days",
  //   isPopular: true,
  //   sampleProducts: ["iPhone Cases", "Samsung Cases", "Custom Designs"]
  // },
  // {
  //   id: 6,
  //   title: "Promotional Banners",
  //   description: "Eye-catching banners for events, businesses, and promotions. Weather-resistant and vibrant colors.",
  //   image: "https://images.unsplash.com/photo-1732122629923-fb32bfe18697",
  //   imageAlt: "Large promotional banner with vibrant business branding displayed at outdoor event with people walking by",
  //   icon: "Flag",
  //   category: "promotional",
  //   features: [
  //   "Weather resistant",
  //   "Large format printing",
  //   "Vibrant colors",
  //   "Easy installation"],

  //   startingPrice: "899",
  //   turnaroundTime: "3-5 days",
  //   isPopular: false,
  //   sampleProducts: ["Event Banners", "Shop Signage", "Flex Boards"]
  // }];


  const filteredServices = activeCategory === 'all' ?
  services :
  services?.filter((service) => service?.category === activeCategory);

  return (
    <section className="py-16 bg-[#081426]">
      <div className="container-brand">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Our Premium Services
          </h2>
          <p className="text-base text-white/85 max-w-2xl mx-auto">
            Discover our comprehensive range of customization services designed to bring your vision to life with exceptional quality and attention to detail.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories?.map((category) =>
          <Button
          key={category?.id}
          variant={activeCategory === category?.id ? "default" : "outline"}
          size="lg"
          iconName={category?.icon}
          iconPosition="left"
          onClick={() => setActiveCategory(category?.id)}
          className="transition-all duration-200 bg-white text-brand-energy hover:bg-black hover:text-white"
        >
          {category?.name}
        </Button>
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