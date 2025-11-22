import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/ui/Button";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex overflow-hidden text-white px-6 bg-print-gradient animate-bgShift">
      {/* gentle overlay glow (keeps gradient vivid, no full dark mask) */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{ mixBlendMode: "overlay", opacity: 0.18 }}
      />

      {/* lightweight decorative blobs (lower cost than huge blurred svgs) */}
      <div
        aria-hidden
        className="absolute -z-20 left-[-10%] top-[-15%] w-[700px] h-[700px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(255,200,90,0.22), rgba(255,120,60,0.06) 35%, transparent 60%)",
          filter: "blur(48px)",
          animation: "blobX 10s ease-in-out infinite",
          transform: "translateZ(0)",
        }}
      />
      <div
        aria-hidden
        className="absolute -z-20 right-[-12%] bottom-[-20%] w-[900px] h-[900px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at 70% 70%, rgba(95,200,140,0.18), rgba(80,150,255,0.06) 30%, transparent 60%)",
          filter: "blur(64px)",
          animation: "blobXrev 16s ease-in-out infinite",
          transform: "translateZ(0)",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 container mx-auto py-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT */}
        <div className="space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm shadow-lg">
            <Icon name="Sparkles" size={18} />
            <span>Premium Printing Since 2024</span>
          </div>

          <h1 className="font-poppins font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight drop-shadow-md">
            Your Vision, <span className="text-gray-100">Our Craft</span>
          </h1>

          <p className="font-inter text-lg text-white/95 max-w-xl lg:mx-0 leading-relaxed">
            High-quality personalized printing for apparel, gifts, events, and branding. Turn your creativity into professional-quality products.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              variant="default"
              size="lg"
              iconName="MessageCircle"
              iconPosition="left"
              className="px-10 py-5 bg-whatsapp text-white font-semibold hover:bg-white hover:scale-105 transition-transform hover:text-black"
              onClick={() => {
                const msg = encodeURIComponent("Hi Satya! I want to customize a printing order.");
                window.open(`https://wa.me/917992801158?text=${msg}`, "_blank");
              }}
            >
              Chat with Satya
            </Button>

            <Link to="/services">
              <Button
                variant="outline"
                size="lg"
                iconName="ArrowRight"
                iconPosition="right"
                className="px-10 py-5 bg-black/40 border-white text-white font-semibold hover:bg-white hover:text-black hover:scale-105 transition-transform"
              >
                Explore Services
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4 text-white/90">
            <span className="flex items-center gap-2 text-sm">
              <Icon name="Shield" size={18} className="text-green-300" />
              Quality Guaranteed
            </span>
            <span className="flex items-center gap-2 text-sm">
              <Icon name="Clock" size={18} className="text-yellow-300" />
              Fast Delivery
            </span>
            <span className="flex items-center gap-2 text-sm">
              <Icon name="Heart" size={18} className="text-red-400" />
              100+ Happy Customers
            </span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-6">
            <div className="relative group overflow-hidden rounded-2xl shadow-xl border border-white/30 bg-white/10 transform transition duration-300 ease-out hover:scale-105 will-change-transform">
              <div className="absolute inset-0 z-0 hidden sm:block">
                <Image
                  src="https://images.unsplash.com/photo-1715787940712-aa4ced280e37?v=1&q=80&w=1600&auto=format&fit=crop"
                  alt="Custom printed black hoodie with white logo"
                  className="w-full h-full object-cover opacity-0 scale-[1.05] transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-40" />
              </div>

              <div className="relative z-10 p-6">
                <h3 className="font-poppins font-semibold text-lg text-white">Custom Hoodies</h3>
                <p className="text-sm opacity-80 text-white/90">Premium Fabric | Long-lasting Print</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl shadow-xl border border-white/30 bg-white/10 transform transition duration-300 ease-out hover:scale-105 will-change-transform">
              <div className="absolute inset-0 z-0 hidden sm:block">
                <Image
                  src="https://images.unsplash.com/photo-1678930427386-94874763acab?v=1&q=80&w=1600&auto=format&fit=crop"
                  alt="Colorful printed product sample"
                  className="w-full h-full object-cover opacity-0 scale-[1.05] transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-40" />
              </div>

              <div className="relative z-10 p-6">
                <h3 className="font-poppins font-semibold text-lg text-white">Tote Bags</h3>
                <p className="text-sm opacity-80 text-white/90">Variety Designs | Vibrant Colors</p>
              </div>
            </div>
          </div>

          <div className="space-y-6 pt-10">
            <div className="relative group overflow-hidden rounded-2xl shadow-xl border border-white/30 bg-white/10 transform transition duration-300 ease-out hover:scale-105 will-change-transform">
              <div className="absolute inset-0 z-0 hidden sm:block">
                <Image
                  src="https://images.unsplash.com/photo-1529155784585-a840631d643b?v=1&q=80&w=1600&auto=format&fit=crop"
                  alt="Custom mug sample"
                  className="w-full h-full object-cover opacity-0 scale-[1.05] transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-40" />
              </div>

              <div className="relative z-10 p-6">
                <h3 className="font-poppins font-semibold text-lg text-white">Mugs & Gifts</h3>
                <p className="text-sm opacity-80 text-white/90">Perfect for Gifting</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl shadow-xl border border-white/30 bg-white/10 transform transition duration-300 ease-out hover:scale-105 will-change-transform">
              <div className="absolute inset-0 z-0 hidden sm:block">
                <Image
                  src="https://images.unsplash.com/photo-1599637132648-1f78cee9b7d7?v=1&q=80&w=1600&auto=format&fit=crop"
                  alt="Custom t-shirt sample"
                  className="w-full h-full object-cover opacity-0 scale-[1.05] transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-40" />
              </div>

              <div className="relative z-10 p-6">
                <h3 className="font-poppins font-semibold text-lg text-white">Custom T-Shirts</h3>
                <p className="text-sm opacity-80 text-white/90">All Sizes Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden lg:block">
        <div className="flex flex-col items-center gap-2 text-white/80">
          <span className="text-sm">Scroll to explore</span>
          <Icon name="ChevronDown" size={22} className="animate-bounce" />
        </div>
      </div>

      {/* Keyframes */}
      <style>{`
        /* gradient shift animation (works with bg-print-gradient) */
        @keyframes bgShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-bgShift { background-size: 300% 100%; animation: bgShift 6s linear infinite; }

        /* decorative blobs */
        @keyframes blobX {
          0% { transform: translate3d(-8%, 0, 0) scale(1); }
          50% { transform: translate3d(6%, 3%, 0) scale(1.04); }
          100% { transform: translate3d(-8%, 0, 0) scale(1); }
        }
        @keyframes blobXrev {
          0% { transform: translate3d(8%, 0, 0) scale(1); }
          50% { transform: translate3d(-6%, -3%, 0) scale(1.06); }
          100% { transform: translate3d(8%, 0, 0) scale(1); }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-bgShift, [style*="animation: blobX"], [style*="animation: blobXrev"] {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
