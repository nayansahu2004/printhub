import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const FeaturedWork = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
  { id: 'all', name: 'All Work', icon: 'Grid' },
  { id: 'apparel', name: 'Apparel', icon: 'Shirt' },
  { id: 'accessories', name: 'Accessories', icon: 'Smartphone' },
  { id: 'business', name: 'Business', icon: 'Briefcase' }];


  const featuredProjects = [
  {
    id: 1,
    title: "Corporate Team Hoodies",
    category: "apparel",
    client: "Tech Startup",
    image: "https://images.unsplash.com/photo-1525476102330-c05dfac0668f",
    alt: "Black corporate hoodies with modern tech company logo in white and blue colors arranged on display",
    description: "Custom hoodies for a 50-member tech team with company branding",
    tags: ["Hoodies", "Corporate", "Bulk Order"],
    featured: true
  },
  {
    id: 2,
    title: "Wedding Anniversary Mugs",
    category: "accessories",
    client: "Personal Gift",
    image: "https://images.unsplash.com/photo-1674436136469-224574f9a2dd",
    alt: "Pair of white ceramic mugs with romantic anniversary design featuring hearts and custom names in gold",
    description: "Personalized anniversary mugs with couple\'s photos and special message",
    tags: ["Mugs", "Anniversary", "Personal"]
  },
  {
    id: 3,
    title: "Restaurant Menu Boards",
    category: "business",
    client: "Local Restaurant",
    image: "https://images.unsplash.com/photo-1704997423829-9526bde1dd92",
    alt: "Large format menu board with appetizing food photography and elegant typography for restaurant display",
    description: "Large format menu boards with mouth-watering food photography",
    tags: ["Signage", "Restaurant", "Large Format"]
  },
  {
    id: 4,
    title: "Custom Phone Case Collection",
    category: "accessories",
    client: "Online Store",
    image: "https://images.unsplash.com/photo-1678930427302-381e63fbe826",
    alt: "Colorful collection of custom phone cases with artistic patterns including florals, geometrics, and abstract designs",
    description: "Artistic phone case designs for an online accessories store",
    tags: ["Phone Cases", "Artistic", "Collection"]
  },
  {
    id: 5,
    title: "Sports Team Jerseys",
    category: "apparel",
    client: "Local Cricket Team",
    image: "https://images.unsplash.com/photo-1644353035895-e8327cf20e3c",
    alt: "Custom cricket team jerseys in blue and white with team logo and player numbers displayed on hangers",
    description: "Complete jersey set for local cricket team with player names and numbers",
    tags: ["Jerseys", "Sports", "Team Wear"]
  },
  {
    id: 6,
    title: "Business Card Design",
    category: "business",
    client: "Consulting Firm",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ef11d82b-1763379621302.png",
    alt: "Premium business cards with matte black finish and gold foil logo for professional consulting firm",
    description: "Premium business cards with gold foil finishing for consulting firm",
    tags: ["Business Cards", "Premium", "Gold Foil"]
  }];


  const filteredProjects = activeCategory === 'all' ?
  featuredProjects :
  featuredProjects?.filter((project) => project?.category === activeCategory);

  const handleWhatsAppInquiry = (projectTitle) => {
    const message = encodeURIComponent(`Hi Papu! I saw the "${projectTitle}" project on your website. I'd like to discuss a similar custom printing project. Can you help?`);
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container-brand">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 bg-brand-energy/10 text-brand-energy px-4 py-2 rounded-full text-sm font-medium">
            <Icon name="Star" size={16} />
            <span>Featured Work</span>
          </div>
          
          <h2 className="text-brand-title text-foreground">
            Success Stories & Happy Customers
          </h2>
          
          <p className="text-brand-body text-muted-foreground max-w-2xl mx-auto">
            Discover how we've helped businesses and individuals bring their creative visions to life 
            through our expert printing and customization services.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories?.map((category) =>
          <Button
            key={category?.id}
            variant={activeCategory === category?.id ? "default" : "outline"}
            size="sm"
            iconName={category?.icon}
            iconPosition="left"
            onClick={() => setActiveCategory(category?.id)}
            className="transition-all duration-200">

              {category?.name}
            </Button>
          )}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects?.map((project) =>
          <div key={project?.id} className="group relative">
              <div className="card-brand h-full overflow-hidden hover:shadow-brand-lg transition-all duration-300">
                {/* Featured Badge */}
                {project?.featured &&
              <div className="absolute top-4 left-4 z-10 bg-success text-success-foreground px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                    <Icon name="Award" size={12} />
                    <span>Featured</span>
                  </div>
              }

                {/* Project Image */}
                <div className="relative overflow-hidden h-56">
                  <Image
                  src={project?.image}
                  alt={project?.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />

                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Overlay Actions */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-2">
                      <Button
                      variant="secondary"
                      size="sm"
                      iconName="Eye"
                      onClick={() => handleWhatsAppInquiry(project?.title)}>

                        View Details
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-brand-energy transition-colors">
                        {project?.title}
                      </h3>
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                        {project?.client}
                      </span>
                    </div>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project?.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {project?.tags?.map((tag, index) =>
                  <span
                    key={index}
                    className="inline-block px-2 py-1 bg-brand-energy/10 text-brand-energy text-xs rounded-md">

                        {tag}
                      </span>
                  )}
                  </div>

                  {/* Action Button */}
                  <Button
                  variant="outline"
                  size="sm"
                  iconName="MessageCircle"
                  iconPosition="left"
                  onClick={() => handleWhatsAppInquiry(project?.title)}
                  className="w-full text-xs">

                    Get Similar Design
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6">
          <div className="bg-card border border-border rounded-2xl p-8 lg:p-12">
            <div className="space-y-4 mb-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                Ready to Create Your Success Story?
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Join our growing list of satisfied customers who have transformed their ideas into 
                stunning printed products. Let's discuss your project today!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                iconName="MessageCircle"
                iconPosition="left"
                onClick={() => handleWhatsAppInquiry("Custom Project")}
                className="btn-whatsapp">

                Start Your Project
              </Button>
              
              <Link to="/gallery">
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Image"
                  iconPosition="left">

                  View Full Gallery
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default FeaturedWork;