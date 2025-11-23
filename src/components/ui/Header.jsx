import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "../AppIcon";
import Button from "./Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: "Home", path: "/homepage", icon: "Home" },
    { name: "Services", path: "/services", icon: "Package" },
    { name: "Gallery", path: "/gallery", icon: "Image" },
    { name: "About", path: "/about", icon: "Info" },
    { name: "Contact", path: "/contact", icon: "Phone" },
  ];

  const secondaryItems = [{ name: "Custom Order", path: "/custom-order", icon: "ShoppingCart" }];

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const msg = encodeURIComponent("Hi Satya, I'm interested in custom printing services. Can you help me get started?");
    window.open(`https://wa.me/917992801158?text=${msg}`, "_blank");
  };
  const handleInstaClick = () => {
    window.open("https://instagram.com/the_printhub.in", "_blank");
  };
  const handlePhoneClick = () => {
    window.open("tel:+917992801158");
  };

  const isActivePath = (p) => location.pathname === p;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white`}
    >
      <div className="container-brand">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* LOGO */}
          <Link to="/homepage" className="flex items-center gap-3 group">
            <img
              src="/Logo.png"
              alt="PrintHub Logo"
              className="h-14 object-contain transition-transform duration-300 group-hover:scale-105 "
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-2">
            {navigationItems.map((item) => {
              const active = isActivePath(item.path);

              // base: keep transform enabled so hover scale works
              const linkBase =
                "flex items-center gap-2 px-4 py-2 rounded-lg font-medium transform transition-all duration-200";

              // active class kept as-is (no change)
              const activeClass = "bg-brand-energy text-white shadow-brand";

              // inactive: default #081426, on hover -> black + scale-105
              const inactiveClass =
                "text-[#081426] hover:text-black hover:scale-105";

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`${linkBase} ${active ? activeClass : inactiveClass}`}
                >
                  <Icon
                    name={item.icon}
                    size={18}
                    className={active ? "text-white" : "text-[#081426]"}
                  />
                  <span className={active ? "text-white" : "text-[#081426]"}>
                    {item.name}
                  </span>
                </Link>
              );
            })}

            {/* MORE MENU */}
            <div className="relative group">
              <button
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transform transition-all duration-200 ${
                  "text-[#081426] hover:text-black hover:scale-105"
                }`}
              >
                <Icon name="MoreHorizontal" size={18} className="text-[#081426]" />
                <span>More</span>
              </button>

              <div className="absolute top-full right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                {secondaryItems.map((item) => {
                  const active = isActivePath(item.path);
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`flex items-center gap-3 px-4 py-3 text-sm transition-all duration-200 transform ${
                        active
                          ? "bg-brand-energy text-black"
                          : "text-[#081426] hover:text-black hover:scale-105"
                      }`}
                    >
                      <Icon name={item.icon} size={16} className={active ? "text-black" : "text-[#081426]"} />
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </nav>

          {/* WHATSAPP + MOBILE ICONS */}
          <div className="flex items-center gap-3">
            <Button 
              size="sm"
              className=" bg-primary text-white hover:text-primary hover:bg-white border-transparent transition-colors duration-200"
              onClick = {handlePhoneClick}
            >
              <i className="fa-solid fa-phone text-m"></i>
            </Button>
            <Button 
              size="sm"
              className=" bg-pink-700 hover:bg-white hover:text-pink-700 text-white border-transparent transition-colors duration-200"
              onClick = {handleInstaClick}
            >
              <i className="fa-brands fa-instagram text-xl"></i>
            </Button>
            {/* DESKTOP WHATSAPP */}
            <div className="hidden sm:inline-flex">
              <Button
                size="sm"
                onClick={handleWhatsAppClick}
                className="bg-whatsapp text-white hover:bg-white hover:text-green-600 border-transparent transition-colors duration-200"
              >
                <i className="fa-brands fa-whatsapp text-xl"></i>
              </Button>
            </div>

            {/* MOBILE WHATSAPP */}
            <div className="sm:hidden">
              <Button
                size="icon"
                onClick={handleWhatsAppClick}
                className="bg-green-600 text-white hover:bg-white hover:text-green-600 transition-colors duration-200"
                iconName="MessageCircle"
              />
            </div>

            {/* MOBILE MENU TOGGLE - ensure hidden on desktop */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                iconName={isMenuOpen ? "X" : "Menu"}
                onClick={() => setIsMenuOpen((v) => !v)}
                className={`transform transition-all duration-200 ${"text-[#081426] hover:text-black hover:scale-105"}`}
                aria-expanded={isMenuOpen}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              />
            </div>
          </div>
        </div>

        {/* MOBILE NAV (white panel with dividers) */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {/* top dividing line that appears when menu opens */}
          <div className={`h-[1px] transition-colors duration-300 ${isMenuOpen ? "bg-border" : "bg-transparent"}`} />

          {/* white panel */}
          <nav
            className={`py-2 ${isMenuOpen ? "bg-white shadow-lg rounded-b-lg mt-2" : "bg-white/0"} transition-all duration-300`}
            role="menu"
            aria-hidden={!isMenuOpen}
          >
            {[...navigationItems, ...secondaryItems].map((item, idx) => {
              const active = isActivePath(item.path);
              // item classes: default text #081426, hover black + scale
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-4 text-sm font-medium transition-all duration-200 transform ${
                    active ? "bg-brand-energy text-white" : "text-[#081426] hover:text-black hover:scale-105"
                  } ${idx !== navigationItems.length + secondaryItems.length - 1 ? "border-b border-border" : ""}`}
                  role="menuitem"
                >
                  <Icon name={item.icon} size={20} className={active ? "text-white" : "text-[#081426]"} />
                  <span>{item.name}</span>
                </Link>
              );
            })}

            <div className="pt-3 px-4 border-t border-border">
              <Button
                fullWidth
                onClick={() => {
                  handleWhatsAppClick();
                  setIsMenuOpen(false);
                }}
                className="bg-green-600 text-white hover:bg-white hover:text-green-600 transition-colors duration-200"
                iconName="MessageCircle"
                iconPosition="left"
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
