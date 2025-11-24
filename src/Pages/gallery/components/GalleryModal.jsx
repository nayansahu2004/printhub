import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const GalleryModal = ({ item, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showBeforeAfter, setShowBeforeAfter] = useState(false);

  if (!isOpen || !item) return null;

  const allImages = [item?.beforeImage, item?.afterImage, ...(item?.additionalImages || [])];
  const allImageAlts = [item?.beforeImageAlt, item?.afterImageAlt, ...(item?.additionalImageAlts || [])];

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? allImages?.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === allImages?.length - 1 ? 0 : prev + 1));
  };

  const handleWhatsAppInquiry = () => {
    const message = encodeURIComponent(`Hi Satya! I'm interested in creating a custom ${item?.category} similar to "${item?.title}". Can you provide a quote and timeline?`);
    window.open(`https://wa.me/917992801158?text=${message}`, '_blank');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: item?.title,
        text: `Check out this amazing ${item?.category} by PrintHub Pro!`,
        url: window.location?.href
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-[#0d1a2f] border border-white/10 rounded-xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-white/6">
          <div>
            <h2 className="text-lg lg:text-xl font-headline font-semibold text-white">
              {item?.title}
            </h2>
            <p className="text-sm text-white/70">
              {item?.category} • Created on {new Date(item.createdAt)?.toLocaleDateString('en-IN')}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              iconName="X"
              onClick={onClose}
              className="text-white/80 hover:text-white"
              aria-label="Close modal"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row max-h-[calc(90vh-74px)]">
          {/* Image Section */}
          <div className="lg:w-2/3 relative bg-[#081426]">
            <div className="aspect-square lg:aspect-video relative overflow-hidden">
              <Image
                src={allImages?.[currentImageIndex]}
                alt={allImageAlts?.[currentImageIndex]}
                className="w-full h-full object-cover"
              />

              {/* Image Navigation */}
              {allImages?.length > 1 && (
                <>
                  <Button
                    variant="secondary"
                    size="icon"
                    iconName="ChevronLeft"
                    onClick={handlePrevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/10 border border-white/10 text-white hover:bg-white/20"
                    aria-label="Previous image"
                  />
                  <Button
                    variant="secondary"
                    size="icon"
                    iconName="ChevronRight"
                    onClick={handleNextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/10 border border-white/10 text-white hover:bg-white/20"
                    aria-label="Next image"
                  />
                </>
              )}

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {allImages?.length}
              </div>
            </div>

            {/* Before/After Toggle */}
            <div className="absolute top-4 left-4">
              <Button
                variant={showBeforeAfter ? 'default' : 'secondary'}
                size="sm"
                iconName="RotateCcw"
                iconPosition="left"
                onClick={() => setShowBeforeAfter(!showBeforeAfter)}
                className="text-white/90"
              >
                {showBeforeAfter ? 'Hide' : 'Show'} Before/After
              </Button>
            </div>

            {/* Before/After Comparison */}
            {showBeforeAfter && (
              <div className="absolute inset-4 bg-[#0d1a2f]/95 backdrop-blur-sm rounded-lg p-4">
                <div className="grid grid-cols-2 gap-4 h-full">
                  <div className="relative rounded overflow-hidden">
                    <Image
                      src={item?.beforeImage}
                      alt={item?.beforeImageAlt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                      Before
                    </div>
                  </div>
                  <div className="relative rounded overflow-hidden">
                    <Image
                      src={item?.afterImage}
                      alt={item?.afterImageAlt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
                      After
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Details Section */}
          <div className="lg:w-1/3 p-6 overflow-y-auto">
            {/* Rating */}
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)]?.map((_, i) => (
                  <Icon
                    key={i}
                    name="Star"
                    size={16}
                    className={i < item?.rating ? 'text-yellow-400' : 'text-white/30'}
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-white/80">({item?.rating}/5)</span>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="font-headline font-semibold mb-2 text-white">Project Details</h3>
              <p className="text-sm text-white/85 leading-relaxed">
                {item?.description}
              </p>
            </div>

            {/* Customer Testimonial */}
            <div className="mb-6 p-4 bg-white/5 rounded-lg">
              <div className="flex items-center space-x-3 mb-3">
                <Image
                  src={item?.customerAvatar}
                  alt={item?.customerAvatarAlt}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-white">{item?.customerName}</p>
                  <p className="text-xs text-white/70">{item?.customerLocation}</p>
                </div>
              </div>
              <blockquote className="text-sm text-white/80 italic">
                "{item?.testimonial}"
              </blockquote>
            </div>

            {/* Project Specifications */}
            <div className="mb-6">
              <h3 className="font-headline font-semibold mb-3 text-white">Specifications</h3>
              <div className="space-y-2">
                {item?.specifications?.map((spec, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="text-white/70">{spec?.label}:</span>
                    <span className="font-medium text-white">{spec?.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="mb-6">
              <h3 className="font-headline font-semibold mb-3 text-white">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {item?.tags?.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-brand-energy/10 text-brand-energy px-2 py-1 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <Button
                variant="success"
                fullWidth
                iconName="MessageCircle"
                iconPosition="left"
                onClick={handleWhatsAppInquiry}
                className="bg-whatsapp text-white hover:bg-white hover:text-black transition-colors duration-200"
              >
                Get Similar Design
              </Button>

              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  fullWidth
                  iconName="Share2"
                  iconPosition="left"
                  onClick={handleShare}
                  className="border-white/10 text-white/90 hover:bg-white hover:text-black transition-colors duration-200"
                >
                  Share
                </Button>
                <Button
                  variant="outline"
                  fullWidth
                  iconName="Download"
                  iconPosition="left"
                  className="border-white/10 text-white/90 hover:bg-white hover:text-black transition-colors duration-200"
                >
                  Save
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;
