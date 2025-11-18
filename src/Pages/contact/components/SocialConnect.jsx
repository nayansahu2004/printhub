import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SocialConnect = ({ onWhatsAppClick }) => {
  const socialPlatforms = [
    {
      id: 1,
      name: "Instagram",
      icon: "Instagram",
      handle: "@printhubpro",
      description: "Daily showcases of our latest custom creations",
      followers: "2.5K+ followers",
      url: "https://instagram.com/printhubpro",
      color: "bg-gradient-to-br from-purple-500 to-pink-500",
      textColor: "text-white"
    },
    {
      id: 2,
      name: "Facebook",
      icon: "Facebook",
      handle: "PrintHub Pro",
      description: "Customer reviews and behind-the-scenes content",
      followers: "1.8K+ likes",
      url: "https://facebook.com/printhubpro",
      color: "bg-blue-600",
      textColor: "text-white"
    },
    {
      id: 3,
      name: "WhatsApp",
      icon: "MessageCircle",
      handle: "+91 98765 43210",
      description: "Instant support and quick order processing",
      followers: "24/7 available",
      url: "#",
      color: "bg-whatsapp",
      textColor: "text-whatsapp-foreground",
      isPrimary: true
    },
    {
      id: 4,
      name: "YouTube",
      icon: "Youtube",
      handle: "PrintHub Pro",
      description: "Printing tutorials and customer testimonials",
      followers: "850+ subscribers",
      url: "https://youtube.com/@printhubpro",
      color: "bg-red-600",
      textColor: "text-white"
    }
  ];

  const handleSocialClick = (platform) => {
    if (platform?.name === "WhatsApp") {
      onWhatsAppClick();
    } else {
      window.open(platform?.url, '_blank');
    }
  };

  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container-brand">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-brand-md mb-12">
            <h2 className="text-brand-title">Connect With Us on Social Media</h2>
            <p className="text-brand-body text-muted-foreground max-w-2xl mx-auto">
              Follow our journey, see our latest work, and join our community of creative customers. 
              Get inspired by what others are creating and share your own custom designs!
            </p>
          </div>

          {/* Social Platforms Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {socialPlatforms?.map((platform) => (
              <div
                key={platform?.id}
                className={`card-brand group hover:scale-105 transition-all duration-300 cursor-pointer ${
                  platform?.isPrimary ? 'ring-2 ring-whatsapp shadow-brand-lg' : ''
                }`}
                onClick={() => handleSocialClick(platform)}
              >
                {platform?.isPrimary && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-whatsapp text-whatsapp-foreground px-3 py-1 rounded-full text-xs font-semibold">
                      Primary Contact
                    </span>
                  </div>
                )}

                <div className="text-center space-brand-sm">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${platform?.color} ${platform?.textColor} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={platform?.icon} size={24} />
                  </div>

                  <h3 className="text-lg font-semibold text-foreground">{platform?.name}</h3>
                  <p className="text-sm font-medium text-brand-energy">{platform?.handle}</p>
                  <p className="text-sm text-muted-foreground">{platform?.description}</p>
                  
                  <div className="text-xs text-muted-foreground mt-2">
                    {platform?.followers}
                  </div>

                  <Button
                    variant={platform?.isPrimary ? "success" : "outline"}
                    size="sm"
                    iconName="ExternalLink"
                    iconPosition="right"
                    className={`w-full mt-3 ${platform?.isPrimary ? 'whatsapp-pulse' : ''}`}
                  >
                    {platform?.isPrimary ? 'Chat Now' : 'Follow'}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Social Proof Section */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="card-brand text-center">
              <Icon name="Heart" size={32} className="text-red-500 mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground">5,000+</div>
              <div className="text-sm text-muted-foreground">Social Media Likes</div>
            </div>
            <div className="card-brand text-center">
              <Icon name="Share2" size={32} className="text-blue-500 mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground">1,200+</div>
              <div className="text-sm text-muted-foreground">Customer Shares</div>
            </div>
            <div className="card-brand text-center">
              <Icon name="Star" size={32} className="text-yellow-500 mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground">4.9/5</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
          </div>

          {/* Latest Social Posts Preview */}
          <div className="card-brand">
            <div className="text-center space-brand-sm mb-8">
              <h3 className="text-xl font-semibold text-foreground">Latest from Our Social Media</h3>
              <p className="text-muted-foreground">See what our customers are creating and sharing</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="group cursor-pointer">
                <div className="aspect-square bg-muted rounded-lg overflow-hidden mb-3 group-hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full bg-gradient-to-br from-brand-energy/20 to-professional/20 flex items-center justify-center">
                    <Icon name="Instagram" size={32} className="text-muted-foreground" />
                  </div>
                </div>
                <div className="text-sm">
                  <div className="font-medium text-foreground">Custom T-Shirt Design</div>
                  <div className="text-muted-foreground">Posted 2 hours ago</div>
                </div>
              </div>

              <div className="group cursor-pointer">
                <div className="aspect-square bg-muted rounded-lg overflow-hidden mb-3 group-hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full bg-gradient-to-br from-professional/20 to-success/20 flex items-center justify-center">
                    <Icon name="Facebook" size={32} className="text-muted-foreground" />
                  </div>
                </div>
                <div className="text-sm">
                  <div className="font-medium text-foreground">Customer Review Video</div>
                  <div className="text-muted-foreground">Posted 1 day ago</div>
                </div>
              </div>

              <div className="group cursor-pointer">
                <div className="aspect-square bg-muted rounded-lg overflow-hidden mb-3 group-hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full bg-gradient-to-br from-success/20 to-brand-energy/20 flex items-center justify-center">
                    <Icon name="Youtube" size={32} className="text-muted-foreground" />
                  </div>
                </div>
                <div className="text-sm">
                  <div className="font-medium text-foreground">Printing Process Tutorial</div>
                  <div className="text-muted-foreground">Posted 3 days ago</div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Button
                variant="outline"
                iconName="ExternalLink"
                iconPosition="right"
                onClick={() => window.open('https://instagram.com/printhubpro', '_blank')}
              >
                View All Posts
              </Button>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-12">
            <div className="card-brand bg-brand-energy/5 border-brand-energy/20 text-center">
              <div className="space-brand-sm">
                <Icon name="Mail" size={32} className="text-brand-energy mx-auto" />
                <h3 className="text-xl font-semibold text-foreground">Stay Updated</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Get the latest design trends, printing tips, and exclusive offers delivered to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent"
                  />
                  <Button
                    variant="default"
                    iconName="Send"
                    iconPosition="left"
                  >
                    Subscribe
                  </Button>
                </div>
                <div className="text-xs text-muted-foreground mt-2">
                  No spam, unsubscribe anytime. We respect your privacy.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialConnect;