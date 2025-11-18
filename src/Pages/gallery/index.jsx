import React, { useState, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Button from '../../components/ui/Button';
import Icon from '../../components/AppIcon';
import FilterBar from './components/FilterBar';
import GalleryCard from './components/GalleryCard';
import GalleryModal from './components/GalleryModal';
import CategoryTabs from './components/CategoryTabs';
import StatsSection from './components/StatsSection';
import TestimonialCarousel from './components/TestimonialCarousel';

const Gallery = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [viewMode, setViewMode] = useState('grid');
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Mock gallery data
  const galleryItems = [
  {
    id: 1,
    title: "Custom Wedding T-Shirts",
    category: "apparel",
    description: "Beautiful custom t-shirts designed for a destination wedding in Goa. Features elegant typography with the couple's names and wedding date in gold foil printing.",
    beforeImage: "https://images.unsplash.com/photo-1584012961506-b6fc4c9f3105",
    beforeImageAlt: "Group of people wearing matching custom white t-shirts at outdoor wedding celebration",
    afterImage: "https://images.unsplash.com/photo-1571461542309-dedaaec54069",
    afterImageAlt: "Close-up of custom white t-shirt with elegant gold foil wedding design and typography",
    additionalImages: [
    "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&h=500&fit=crop"],

    additionalImageAlts: [
    "Bride and groom wearing matching custom wedding t-shirts during beach photoshoot",
    "Wedding party group photo showing all custom t-shirts with coordinated design elements"],

    customerName: "Priya & Arjun Sharma",
    customerLocation: "Mumbai, Maharashtra",
    customerAvatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1e94201ef-1763296134446.png",
    customerAvatarAlt: "Professional headshot of Indian woman with long black hair wearing white blouse",
    rating: 5,
    likes: 124,
    createdAt: new Date('2024-10-15'),
    testimonial: "PrintHub Pro made our wedding extra special! The custom t-shirts were perfect for our beach wedding and everyone loved them. Papu\'s attention to detail was incredible.",
    specifications: [
    { label: "Material", value: "100% Cotton" },
    { label: "Print Type", value: "Gold Foil + Screen Print" },
    { label: "Quantity", value: "25 pieces" },
    { label: "Turnaround", value: "3 days" }],

    tags: ["wedding", "custom apparel", "gold foil", "beach wedding", "group order"]
  },
  {
    id: 2,
    title: "Corporate Branded Mugs",
    category: "mugs",
    description: "Professional ceramic mugs with company logo and motivational quotes for a tech startup. High-quality sublimation printing ensures durability and vibrant colors.",
    beforeImage: "https://images.unsplash.com/photo-1697065686935-2779af5cbddc",
    beforeImageAlt: "White ceramic mug with custom photo print sitting on wooden table with coffee",
    afterImage: "https://images.unsplash.com/photo-1644136322451-e7063f53b4f2",
    afterImageAlt: "Collection of branded ceramic mugs with colorful company logos arranged on office desk",
    additionalImages: [
    "https://images.unsplash.com/photo-1572119865084-43c285814d63?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=500&fit=crop"],

    additionalImageAlts: [
    "Close-up of branded mug showing high-quality logo print and vibrant colors",
    "Office team using custom branded mugs during morning coffee break meeting"],

    customerName: "Rajesh Kumar",
    customerLocation: "Bangalore, Karnataka",
    customerAvatar: "https://img.rocket.new/generatedImages/rocket_gen_img_10742e8ef-1763296701959.png",
    customerAvatarAlt: "Professional headshot of Indian man with short black hair in navy blue shirt",
    rating: 5,
    likes: 89,
    createdAt: new Date('2024-11-01'),
    testimonial: "Excellent quality mugs for our startup! The logo came out perfectly and our team loves using them. Great for building company culture.",
    specifications: [
    { label: "Material", value: "Ceramic" },
    { label: "Print Type", value: "Sublimation" },
    { label: "Capacity", value: "11 oz" },
    { label: "Quantity", value: "50 pieces" }],

    tags: ["corporate", "branding", "startup", "office", "sublimation"]
  },
  {
    id: 3,
    title: "Personalized Tote Bags",
    category: "bags",
    description: "Eco-friendly canvas tote bags with custom artwork for a local art festival. Each bag features unique designs created by local artists, printed with eco-friendly inks.",
    beforeImage: "https://images.unsplash.com/photo-1647742313922-fe9597734836",
    beforeImageAlt: "Natural canvas tote bag with custom colorful artistic design hanging on wooden display",
    afterImage: "https://images.unsplash.com/photo-1683438465247-1b1a545ec02d",
    afterImageAlt: "Collection of custom printed tote bags with various artistic designs displayed at art festival",
    additionalImages: [
    "https://images.unsplash.com/photo-1647332208410-4da856229cd4",
    "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=500&h=500&fit=crop"],

    additionalImageAlts: [
    "Person carrying custom tote bag with vibrant artistic print at outdoor market",
    "Close-up detail of high-quality screen printing on canvas tote bag showing color vibrancy"],

    customerName: "Meera Patel",
    customerLocation: "Ahmedabad, Gujarat",
    customerAvatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1248a4355-1763295598278.png",
    customerAvatarAlt: "Professional headshot of Indian woman with shoulder-length hair wearing blue blazer",
    rating: 5,
    likes: 156,
    createdAt: new Date('2024-10-28'),
    testimonial: "The tote bags were a huge hit at our art festival! The quality was amazing and the prints looked exactly like the original artwork. Highly recommended!",
    specifications: [
    { label: "Material", value: "Canvas Cotton" },
    { label: "Print Type", value: "Screen Print" },
    { label: "Size", value: "15x16 inches" },
    { label: "Quantity", value: "100 pieces" }],

    tags: ["eco-friendly", "art festival", "canvas", "custom artwork", "screen print"]
  },
  {
    id: 4,
    title: "Custom Photo Frames",
    category: "home-decor",
    description: "Elegant wooden photo frames with personalized engraving for a golden anniversary celebration. Features laser-cut designs and gold accents for a premium finish.",
    beforeImage: "https://images.unsplash.com/photo-1627353802127-2a54c66168cf",
    beforeImageAlt: "Elegant wooden photo frame with custom laser engraving displaying family portrait on mantle",
    afterImage: "https://images.unsplash.com/photo-1515419140650-d2133082c5d4",
    afterImageAlt: "Collection of custom engraved wooden photo frames with gold accents arranged on display table",
    additionalImages: [
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=500&h=500&fit=crop"],

    additionalImageAlts: [
    "Close-up of laser engraved text on wooden photo frame showing precision and detail",
    "Golden anniversary couple holding their custom engraved photo frames with family photos"],

    customerName: "Suresh & Kamala Iyer",
    customerLocation: "Chennai, Tamil Nadu",
    customerAvatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1221b5557-1763292864149.png",
    customerAvatarAlt: "Professional headshot of Indian man with beard wearing white shirt and glasses",
    rating: 5,
    likes: 78,
    createdAt: new Date('2024-11-05'),
    testimonial: "Beautiful frames for our 50th anniversary! The engraving was perfect and the quality exceeded our expectations. A treasured keepsake for our family.",
    specifications: [
    { label: "Material", value: "Teak Wood" },
    { label: "Finish", value: "Laser Engraving + Gold Accent" },
    { label: "Size", value: "8x10 inches" },
    { label: "Quantity", value: "6 pieces" }],

    tags: ["anniversary", "wooden frames", "laser engraving", "premium", "family"]
  },
  {
    id: 5,
    title: "Business Card Design",
    category: "business",
    description: "Premium business cards with embossed logo and metallic foil accents for a luxury real estate agency. Double-sided design with spot UV coating for professional appeal.",
    beforeImage: "https://images.unsplash.com/photo-1513710281312-7a43f9cdbfcc",
    beforeImageAlt: "Stack of premium business cards with embossed logo and metallic gold foil accents on marble surface",
    afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_11804b4cc-1763379623276.png",
    afterImageAlt: "Professional business cards spread out showing front and back design with spot UV coating",
    additionalImages: [
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=500&h=500&fit=crop"],

    additionalImageAlts: [
    "Close-up of business card showing embossed texture and metallic foil detail",
    "Real estate agent handing out custom business cards to clients at property showing"],

    customerName: "Vikash Properties",
    customerLocation: "Gurgaon, Haryana",
    customerAvatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1e7bca6b4-1763295393217.png",
    customerAvatarAlt: "Professional headshot of Indian businessman in dark suit with confident smile",
    rating: 5,
    likes: 92,
    createdAt: new Date('2024-10-20'),
    testimonial: "Outstanding business cards that really make an impression! The quality and finish are top-notch. Our clients always comment on how professional they look.",
    specifications: [
    { label: "Material", value: "350gsm Art Card" },
    { label: "Finish", value: "Embossing + Foil + Spot UV" },
    { label: "Size", value: "3.5x2 inches" },
    { label: "Quantity", value: "1000 pieces" }],

    tags: ["business cards", "luxury", "embossing", "foil", "real estate"]
  },
  {
    id: 6,
    title: "Anniversary Photo Album",
    category: "gifts",
    description: "Handcrafted leather-bound photo album with custom embossing for a couple\'s 25th wedding anniversary. Features premium paper and protective sleeves for lasting memories.",
    beforeImage: "https://images.unsplash.com/photo-1647541706949-d28336bd0d48",
    beforeImageAlt: "Elegant leather-bound photo album with custom embossed names and anniversary date on cover",
    afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1a1c1d295-1763379620949.png",
    afterImageAlt: "Open photo album showing high-quality printed photos with protective sleeves and elegant layout",
    additionalImages: [
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=500&h=500&fit=crop"],

    additionalImageAlts: [
    "Close-up of leather album cover showing detailed embossing work and premium craftsmanship",
    "Couple looking through their custom anniversary photo album together on their special day"],

    customerName: "Anita & Rohit Desai",
    customerLocation: "Pune, Maharashtra",
    customerAvatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1e94201ef-1763296134446.png",
    customerAvatarAlt: "Professional headshot of Indian woman with long black hair wearing white blouse",
    rating: 5,
    likes: 134,
    createdAt: new Date('2024-11-10'),
    testimonial: "This photo album is absolutely beautiful! The leather quality is amazing and the embossing is perfect. It's become our most treasured possession.",
    specifications: [
    { label: "Material", value: "Genuine Leather" },
    { label: "Pages", value: "50 pages" },
    { label: "Size", value: "12x12 inches" },
    { label: "Finish", value: "Gold Embossing" }],

    tags: ["anniversary", "photo album", "leather", "embossing", "premium gift"]
  },
  {
    id: 7,
    title: "Sports Team Jerseys",
    category: "apparel",
    description: "Custom cricket team jerseys with sublimation printing for a local cricket club. Features moisture-wicking fabric, team logo, and individual player names and numbers.",
    beforeImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop",
    beforeImageAlt: "Cricket team wearing matching custom blue jerseys posing together on cricket field",
    afterImage: "https://images.unsplash.com/photo-1715801183149-37381bb049bb",
    afterImageAlt: "Close-up of custom cricket jersey showing team logo, player name and number with sublimation print",
    additionalImages: [
    "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop"],

    additionalImageAlts: [
    "Cricket players in action wearing custom team jerseys during match play",
    "Team captain holding up custom jersey showing back design with player name and number"],

    customerName: "Mumbai Warriors CC",
    customerLocation: "Mumbai, Maharashtra",
    customerAvatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1221b5557-1763292864149.png",
    customerAvatarAlt: "Professional headshot of Indian man with beard wearing white shirt and glasses",
    rating: 5,
    likes: 167,
    createdAt: new Date('2024-10-25'),
    testimonial: "Fantastic jerseys for our cricket team! The quality is professional-grade and the sublimation printing looks amazing. We won the tournament wearing these!",
    specifications: [
    { label: "Material", value: "Polyester Mesh" },
    { label: "Print Type", value: "Sublimation" },
    { label: "Features", value: "Moisture-wicking" },
    { label: "Quantity", value: "15 pieces" }],

    tags: ["cricket", "sports jerseys", "sublimation", "team wear", "moisture-wicking"]
  },
  {
    id: 8,
    title: "Custom Wall Clock",
    category: "home-decor",
    description: "Personalized wooden wall clock with family photos and names for a housewarming gift. Features silent movement mechanism and UV-printed family collage design.",
    beforeImage: "https://images.unsplash.com/photo-1677527002702-3d524952fb55",
    beforeImageAlt: "Custom wooden wall clock with family photos arranged in circular pattern around clock face",
    afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_155655260-1763379621581.png",
    afterImageAlt: "Elegant wall clock mounted on living room wall showing UV-printed family photos and custom design",
    additionalImages: [
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=500&h=500&fit=crop"],

    additionalImageAlts: [
    "Close-up of wall clock showing high-quality UV printing and precision of photo placement",
    "Family admiring their custom wall clock in their new home during housewarming celebration"],

    customerName: "Deepak & Sunita Gupta",
    customerLocation: "Jaipur, Rajasthan",
    customerAvatar: "https://img.rocket.new/generatedImages/rocket_gen_img_10742e8ef-1763296701959.png",
    customerAvatarAlt: "Professional headshot of Indian man with short black hair in navy blue shirt",
    rating: 5,
    likes: 98,
    createdAt: new Date('2024-11-08'),
    testimonial: "What a wonderful housewarming gift! The wall clock with our family photos is so unique and beautiful. Everyone who visits asks where we got it from.",
    specifications: [
    { label: "Material", value: "MDF Wood" },
    { label: "Print Type", value: "UV Printing" },
    { label: "Size", value: "12 inches diameter" },
    { label: "Movement", value: "Silent Quartz" }],

    tags: ["wall clock", "family photos", "housewarming", "UV printing", "personalized"]
  }];


  // Filter and sort logic
  const filteredItems = useMemo(() => {
    let filtered = galleryItems;

    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered?.filter((item) => item?.category === activeCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered?.filter((item) =>
      item?.title?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
      item?.description?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
      item?.tags?.some((tag) => tag?.toLowerCase()?.includes(searchTerm?.toLowerCase()))
      );
    }

    // Sort items
    switch (sortBy) {
      case 'newest':
        filtered?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        break;
      case 'oldest':
        filtered?.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        break;
      case 'rating':
        filtered?.sort((a, b) => b?.rating - a?.rating);
        break;
      case 'popular':
        filtered?.sort((a, b) => b?.likes - a?.likes);
        break;
      default:
        break;
    }

    return filtered;
  }, [galleryItems, activeCategory, searchTerm, sortBy]);

  // Calculate category counts
  const categoryCounts = useMemo(() => {
    const counts = {
      all: galleryItems?.length,
      apparel: 0,
      mugs: 0,
      bags: 0,
      homeDecor: 0,
      business: 0,
      gifts: 0
    };

    galleryItems?.forEach((item) => {
      switch (item?.category) {
        case 'apparel':
          counts.apparel++;
          break;
        case 'mugs':
          counts.mugs++;
          break;
        case 'bags':
          counts.bags++;
          break;
        case 'home-decor':
          counts.homeDecor++;
          break;
        case 'business':
          counts.business++;
          break;
        case 'gifts':
          counts.gifts++;
          break;
        default:
          break;
      }
    });

    return counts;
  }, [galleryItems]);

  // Pagination
  const totalPages = Math.ceil(filteredItems?.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedItems = filteredItems?.slice(startIndex, startIndex + itemsPerPage);

  const handleViewDetails = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleShare = (item) => {
    // Fallback share functionality
    if (navigator.clipboard) {
      navigator.clipboard?.writeText(`Check out this amazing ${item?.category} by PrintHub Pro: ${item?.title}`);
    }
  };

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent("Hi Papu! I browsed through your gallery and I'm impressed with your work. I'd like to discuss a custom printing project. Can you help me?");
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, searchTerm, sortBy]);

  return (
    <div className="min-h-screen bg-canvas">
      <Helmet>
        <title>Gallery - PrintHub Pro | Custom Printing Portfolio & Customer Success Stories</title>
        <meta name="description" content="Explore our gallery of custom printing projects including apparel, mugs, bags, home decor, and business materials. See real customer success stories and transformations." />
        <meta name="keywords" content="custom printing gallery, customer success stories, custom apparel, personalized mugs, branded merchandise, PrintHub Pro portfolio" />
      </Helmet>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-brand text-white py-20">
          <div className="container-brand text-center">
            <h1 className="text-brand-hero text-white mb-6">
              Our Creative Gallery
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
              Discover the magic of custom printing through our portfolio of successful projects. 
              Each piece tells a unique story of creativity, quality, and customer satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                iconName="MessageCircle"
                iconPosition="left"
                onClick={handleWhatsAppContact}
                className="whatsapp-pulse">

                Start Your Project
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="ArrowDown"
                iconPosition="left"
                onClick={() => document.getElementById('gallery-content')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-white text-white hover:bg-white hover:text-brand-energy">

                Explore Gallery
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <div className="container-brand -mt-8 relative z-10">
          <StatsSection />
        </div>

        {/* Gallery Content */}
        <section id="gallery-content" className="container-brand py-12">
          {/* Category Tabs */}
          <CategoryTabs
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            categoryCounts={categoryCounts} />


          {/* Filter Bar */}
          <FilterBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            sortBy={sortBy}
            setSortBy={setSortBy}
            viewMode={viewMode}
            setViewMode={setViewMode} />


          {/* Results Info */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-muted-foreground">
              Showing {paginatedItems?.length} of {filteredItems?.length} projects
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Icon name="Filter" size={16} />
              <span>Filtered by: {activeCategory === 'all' ? 'All Categories' : activeCategory}</span>
            </div>
          </div>

          {/* Gallery Grid */}
          {paginatedItems?.length > 0 ?
          <div className={`grid gap-6 mb-12 ${
          viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1'}`
          }>
              {paginatedItems?.map((item) =>
            <GalleryCard
              key={item?.id}
              item={item}
              viewMode={viewMode}
              onShare={handleShare}
              onViewDetails={handleViewDetails} />

            )}
            </div> :

          <div className="text-center py-16">
              <Icon name="Search" size={64} className="text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-headline font-semibold mb-2">No projects found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <Button
              variant="outline"
              iconName="RotateCcw"
              iconPosition="left"
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setActiveCategory('all');
                setSortBy('newest');
              }}>

                Clear All Filters
              </Button>
            </div>
          }

          {/* Pagination */}
          {totalPages > 1 &&
          <div className="flex items-center justify-center space-x-2">
              <Button
              variant="outline"
              size="sm"
              iconName="ChevronLeft"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)} />

              
              {[...Array(totalPages)]?.map((_, index) => {
              const page = index + 1;
              if (
              page === 1 ||
              page === totalPages ||
              page >= currentPage - 1 && page <= currentPage + 1)
              {
                return (
                  <Button
                    key={page}
                    variant={currentPage === page ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setCurrentPage(page)}>

                      {page}
                    </Button>);

              } else if (page === currentPage - 2 || page === currentPage + 2) {
                return <span key={page} className="px-2 text-muted-foreground">...</span>;
              }
              return null;
            })}
              
              <Button
              variant="outline"
              size="sm"
              iconName="ChevronRight"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)} />

            </div>
          }
        </section>

        {/* Testimonial Carousel */}
        <section className="container-brand py-12">
          <TestimonialCarousel />
        </section>

        {/* CTA Section */}
        <section className="bg-muted py-16">
          <div className="container-brand text-center">
            <h2 className="text-brand-title mb-4">
              Ready to Create Your Own Success Story?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Join hundreds of satisfied customers who have brought their vision to life with PrintHub Pro. 
              Let's create something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="success"
                size="lg"
                iconName="MessageCircle"
                iconPosition="left"
                onClick={handleWhatsAppContact}
                className="whatsapp-pulse">

                Start Your Project Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Phone"
                iconPosition="left"
                onClick={() => window.open('tel:+919876543210', '_self')}>

                Call Us Today
              </Button>
            </div>
          </div>
        </section>
      </main>
      {/* Gallery Modal */}
      <GalleryModal
        item={selectedItem}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedItem(null);
        }} />

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button
          variant="success"
          size="lg"
          iconName="MessageCircle"
          onClick={handleWhatsAppContact}
          className="whatsapp-pulse shadow-brand-lg">

          <span className="hidden sm:inline ml-2">Chat with Papu</span>
        </Button>
      </div>
    </div>);

};

export default Gallery;