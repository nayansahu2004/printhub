import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/homepage', icon: 'Home' },
    { name: 'Services', path: '/services', icon: 'Package' },
    { name: 'Gallery', path: '/gallery', icon: 'Image' },
    { name: 'About', path: '/about', icon: 'Info' },
    { name: 'Contact', path: '/contact', icon: 'Phone' }
  ];

  const secondaryItems = [
    { name: 'Custom Order', path: '/custom-order', icon: 'ShoppingCart' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi Satya, I'm interested in custom printing services. Can you help me get started?");
    window.open(`https://wa.me/919937643338?text=${message}`, '_blank');
  };

  const isActivePath = (path) => {
    return location?.pathname === path; 
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md shadow-neutral' : 'bg-background'
    }`}>
      <div className="container-brand">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link 
            to="/homepage" 
            className="flex items-center space-x-3 group"
          >
            <div className="relative">
              <svg 
                width="40" 
                height="40" 
                viewBox="0 0 40 40" 
                className="text-brand-energy group-hover:scale-105 transition-transform duration-300"
              >
                <circle 
                  cx="20" 
                  cy="20" 
                  r="18" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                  className="logo-morph"
                />
                <path 
                  d="M12 20h16M20 12v16" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                  className="logo-morph"
                  style={{ animationDelay: '0.5s' }}
                />
              </svg>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-brand font-bold text-brand-energy">
                The PrintHub 
              </h1>
              <p className="text-xs text-muted-foreground font-body">
                Your Vision, Our Craft
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  isActivePath(item?.path)
                    ? 'bg-brand-energy text-brand-energy-foreground shadow-brand'
                    : 'text-foreground hover:bg-muted hover:text-brand-energy'
                }`}
              >
                <Icon name={item?.icon} size={18} />
                <span className="font-headline">{item?.name}</span>
              </Link>
            ))}
            
            {/* More Menu */}
            <div className="relative group">
              <button className="flex items-center space-x-2 px-4 py-2 rounded-lg font-medium text-foreground hover:bg-muted hover:text-brand-energy transition-all duration-200">
                <Icon name="MoreHorizontal" size={18} />
                <span className="font-headline">More</span>
              </button>
              
              <div className="absolute top-full right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-neutral-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                {secondaryItems?.map((item) => (
                  <Link
                    key={item?.path}
                    to={item?.path}
                    className={`flex items-center space-x-3 px-4 py-3 text-sm font-medium transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg ${
                      isActivePath(item?.path)
                        ? 'bg-brand-energy text-brand-energy-foreground'
                        : 'text-foreground hover:bg-muted hover:text-brand-energy'
                    }`}
                  >
                    <Icon name={item?.icon} size={16} />
                    <span className="font-headline">{item?.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* WhatsApp CTA & Mobile Menu */}
          <div className="flex items-center space-x-3">
            {/* WhatsApp Button */}
            <Button
              variant="success"
              size="sm"
              iconName="MessageCircle"
              iconPosition="left"
              onClick={handleWhatsAppClick}
              className="hidden sm:flex whatsapp-pulse"
            >
              Chat Now
            </Button>

            {/* Mobile WhatsApp Icon */}
            <Button
              variant="success"
              size="icon"
              iconName="MessageCircle"
              onClick={handleWhatsAppClick}
              className="sm:hidden whatsapp-pulse"
            />

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              iconName={isMenuOpen ? "X" : "Menu"}
              onClick={toggleMenu}
              className="lg:hidden"
            />
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="py-4 space-y-2 border-t border-border">
            {[...navigationItems, ...secondaryItems]?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                  isActivePath(item?.path)
                    ? 'bg-brand-energy text-brand-energy-foreground shadow-brand'
                    : 'text-foreground hover:bg-muted hover:text-brand-energy'
                }`}
              >
                <Icon name={item?.icon} size={20} />
                <span className="font-headline">{item?.name}</span>
              </Link>
            ))}
            
            {/* Mobile WhatsApp CTA */}
            <div className="pt-4 border-t border-border">
              <Button
                variant="success"
                fullWidth
                iconName="MessageCircle"
                iconPosition="left"
                onClick={handleWhatsAppClick}
                className="whatsapp-pulse"
              >
                Start Your Custom Design
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;