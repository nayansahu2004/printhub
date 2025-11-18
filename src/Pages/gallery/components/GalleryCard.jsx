import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const GalleryCard = ({ item, viewMode, onShare, onViewDetails }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleWhatsAppInquiry = () => {
    const message = encodeURIComponent(`Hi Papu! I saw this amazing ${item?.title} in your gallery and I'm interested in creating something similar. Can you help me with a custom design?`);
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: item?.title,
        text: `Check out this amazing custom ${item?.category} by PrintHub Pro!`,
        url: window.location?.href
      });
    } else {
      onShare(item);
    }
  };

  if (viewMode === 'list') {
    return (
      <div className="bg-card border border-border rounded-lg overflow-hidden shadow-neutral hover:shadow-neutral-lg transition-all duration-300">
        <div className="flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="md:w-1/3 relative group">
            <div className="aspect-video md:aspect-square overflow-hidden">
              <Image
                src={item?.beforeImage}
                alt={item?.beforeImageAlt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="absolute top-2 left-2">
              <span className="bg-brand-energy text-brand-energy-foreground px-2 py-1 rounded-full text-xs font-medium">
                {item?.category}
              </span>
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-2/3 p-6">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-xl font-headline font-semibold text-foreground mb-1">
                  {item?.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  Created on {new Date(item.createdAt)?.toLocaleDateString('en-IN')}
                </p>
              </div>
              <div className="flex items-center space-x-1">
                {[...Array(5)]?.map((_, i) => (
                  <Icon
                    key={i}
                    name="Star"
                    size={16}
                    className={i < item?.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                  />
                ))}
                <span className="text-sm text-muted-foreground ml-1">({item?.rating})</span>
              </div>
            </div>

            <p className="text-foreground mb-4 line-clamp-2">
              {item?.description}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  iconName="Eye"
                  iconPosition="left"
                  onClick={() => onViewDetails(item)}
                >
                  View Details
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  iconName={isLiked ? "Heart" : "Heart"}
                  onClick={() => setIsLiked(!isLiked)}
                  className={isLiked ? 'text-red-500' : ''}
                />
                <Button
                  variant="ghost"
                  size="sm"
                  iconName="Share2"
                  onClick={handleShare}
                />
              </div>
              <Button
                variant="success"
                size="sm"
                iconName="MessageCircle"
                iconPosition="left"
                onClick={handleWhatsAppInquiry}
              >
                Get Similar
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden shadow-neutral hover:shadow-neutral-lg transition-all duration-300 group">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={item?.beforeImage}
          alt={item?.beforeImageAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex space-x-2">
            <Button
              variant="secondary"
              size="sm"
              iconName="Eye"
              onClick={() => onViewDetails(item)}
            />
            <Button
              variant="secondary"
              size="sm"
              iconName="Share2"
              onClick={handleShare}
            />
          </div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="bg-brand-energy text-brand-energy-foreground px-2 py-1 rounded-full text-xs font-medium">
            {item?.category}
          </span>
        </div>

        {/* Rating Badge */}
        <div className="absolute top-3 right-3 bg-card/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
          <Icon name="Star" size={14} className="text-yellow-400 fill-current" />
          <span className="text-xs font-medium">{item?.rating}</span>
        </div>
      </div>
      {/* Content */}
      <div className="p-4">
        <h3 className="font-headline font-semibold text-foreground mb-2 line-clamp-1">
          {item?.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {item?.description}
        </p>

        {/* Customer Info */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <Image
              src={item?.customerAvatar}
              alt={item?.customerAvatarAlt}
              className="w-6 h-6 rounded-full object-cover"
            />
            <span className="text-xs text-muted-foreground">{item?.customerName}</span>
          </div>
          <span className="text-xs text-muted-foreground">
            {new Date(item.createdAt)?.toLocaleDateString('en-IN')}
          </span>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              iconName={isLiked ? "Heart" : "Heart"}
              onClick={() => setIsLiked(!isLiked)}
              className={`p-1 ${isLiked ? 'text-red-500' : ''}`}
            />
            <span className="text-xs text-muted-foreground">{item?.likes}</span>
          </div>
          <Button
            variant="success"
            size="sm"
            iconName="MessageCircle"
            onClick={handleWhatsAppInquiry}
            className="text-xs px-3"
          >
            Order Similar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;