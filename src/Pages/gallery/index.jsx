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
    /* ... your gallery items (unchanged) ... */
  ];

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
      navigator.clipboard?.writeText(`Check out this amazing ${item?.category} by The PrintHub: ${item?.title}`);
    }
  };

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent("Hi Satya! I browsed through your gallery and I'm impressed with your work. I'd like to discuss a custom printing project. Can you help me?");
    window.open(`https://wa.me/917992801158?text=${"Hello Satya! I have an order for you, can you communicate for better results."}`, '_blank');
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, searchTerm, sortBy]);

  return (
    <div className="min-h-screen bg-canvas">
      <Helmet>
        <title>Gallery - The PrintHub | Custom Printing Portfolio & Customer Success Stories</title>
        <meta name="description" content="Explore our gallery of custom printing projects including apparel, mugs, bags, home decor, and business materials. See real customer success stories and transformations." />
        <meta name="keywords" content="custom printing gallery, customer success stories, custom apparel, personalized mugs, branded merchandise, The Print Hub portfolio" />
      </Helmet>
      <Header />
      <main className="pt-20">
        {/* Hero Section — KEEP BG on section (full-bleed) but content centered with px */}
        <section className="bg-[#081426] text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Our Creative Gallery
            </h1>

            <p className="text-base text-white/85 max-w-3xl mx-auto mb-8">
              Discover the magic of custom printing through our portfolio of successful projects. 
              Each piece tells a unique story of creativity, quality, and customer satisfaction.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                iconName="MessageCircle"
                iconPosition="left"
                onClick={handleWhatsAppContact}
                className="bg-whatsapp text-white hover:bg-white hover:text-black transition-colors duration-300"
              >
                Start Your Project
              </Button>

              <Button
                variant="outline"
                size="lg"
                iconName="ArrowDown"
                iconPosition="left"
                onClick={() =>
                  document.getElementById('gallery-content')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="border-white text-white hover:bg-white hover:text-black transition-colors duration-300"
              >
                Explore Gallery
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section — StatsSection already provides its own full-bleed bg + container,
            so don't wrap it in another container that could create gutters. */}
        <StatsSection />

        {/* Gallery Content — use container with px so content aligns with hero */}
        {/* <section id="gallery-content" className="container mx-auto px-6 py-12"> */}
          {/* Category Tabs */}
          {/* <CategoryTabs
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            categoryCounts={categoryCounts} /> */}

          {/* Filter Bar */}
          {/* <FilterBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            sortBy={sortBy}
            setSortBy={setSortBy}
            viewMode={viewMode}
            setViewMode={setViewMode} /> */}

          {/* Results Info */}
          {/* <div className="flex items-center justify-between mb-6">
            <p className="text-muted-foreground">
              Showing {paginatedItems?.length} of {filteredItems?.length} projects
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Icon name="Filter" size={16} />
              <span>Filtered by: {activeCategory === 'all' ? 'All Categories' : activeCategory}</span>
            </div>
          </div> */}

          {/* Gallery Grid */}
          {/* {paginatedItems?.length > 0 ? (
            <div className={`grid gap-6 mb-12 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1'}`}>
              {paginatedItems?.map((item) => (
                <GalleryCard
                  key={item?.id}
                  item={item}
                  viewMode={viewMode}
                  onShare={handleShare}
                  onViewDetails={handleViewDetails} />
              ))}
            </div>
          ) : (
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
          )} */}

          {/* Pagination */}
          {/* {totalPages > 1 && (
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
                  (page >= currentPage - 1 && page <= currentPage + 1)
                ) {
                  return (
                    <Button
                      key={page}
                      variant={currentPage === page ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setCurrentPage(page)}>
                      {page}
                    </Button>
                  );
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
          )} */}
        {/* </section> */}

        {/* Testimonial Carousel — content centered with px */}
        <section className="container mx-auto px-6 py-12">
          <TestimonialCarousel />
        </section>

        {/* CTA Section */}
        <section className="bg-[#081426] py-16">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
      Ready to Create Your Own Success Story?
    </h2>

    <p className="text-base text-white/85 max-w-2xl mx-auto mb-8">
      Join hundreds of satisfied customers who have brought their vision to life with The PrintHub. 
      Let's create something amazing together!
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button
        variant="default"
        size="lg"
        iconName="MessageCircle"
        iconPosition="left"
        onClick={handleWhatsAppContact}
        className="bg-whatsapp text-white hover:bg-white hover:text-black transition-colors duration-300"
      >
        Start Your Project Now
      </Button>

      <Button
        variant="outline"
        size="lg"
        iconName="Phone"
        iconPosition="left"
        onClick={() => window.open('tel:+917992801158', '_self')}
        className="border-white text-white hover:bg-white hover:text-black transition-colors duration-300"
      >
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
          <span className="hidden sm:inline ml-2">Chat with Satya</span>
        </Button>
      </div>
    </div>
  );
};

export default Gallery;
