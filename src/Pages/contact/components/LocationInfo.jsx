import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LocationInfo = ({ onWhatsAppClick }) => {
  const handleDirectionsClick = () => {
    const message = encodeURIComponent("Hi Papu, I'd like to visit your studio. Can you share the exact location and best time to visit?");
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  return (
    <section className="py-16 lg:py-20 bg-muted/30">
      <div className="container-brand">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-brand-md mb-12">
            <h2 className="text-brand-title">Visit Our Creative Studio</h2>
            <p className="text-brand-body text-muted-foreground max-w-2xl mx-auto">
              Want to see our work up close? Schedule a visit to our studio in Bhubaneswar. 
              See samples, discuss your project in person, and experience our quality firsthand.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Location Details */}
            <div className="space-brand-md">
              <div className="card-brand">
                <div className="space-brand-sm">
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center space-x-2">
                    <Icon name="MapPin" size={24} className="text-brand-energy" />
                    <span>Studio Location</span>
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Icon name="Building" size={18} className="text-muted-foreground mt-1" />
                      <div>
                        <div className="font-medium text-foreground">PrintHub Pro Studio</div>
                        <div className="text-muted-foreground">Professional Printing & Customization Center</div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Icon name="MapPin" size={18} className="text-muted-foreground mt-1" />
                      <div>
                        <div className="font-medium text-foreground">Bhubaneswar, Odisha</div>
                        <div className="text-muted-foreground">Near Kalinga Institute of Technology</div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Icon name="Clock" size={18} className="text-muted-foreground mt-1" />
                      <div>
                        <div className="font-medium text-foreground">Visit by Appointment</div>
                        <div className="text-muted-foreground">Monday - Saturday: 10 AM - 7 PM</div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Icon name="Car" size={18} className="text-muted-foreground mt-1" />
                      <div>
                        <div className="font-medium text-foreground">Easy Parking Available</div>
                        <div className="text-muted-foreground">Free parking for visitors</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-border">
                    <Button
                      variant="default"
                      iconName="Navigation"
                      iconPosition="left"
                      onClick={handleDirectionsClick}
                      className="flex-1"
                    >
                      Get Directions
                    </Button>
                    <Button
                      variant="success"
                      iconName="MessageCircle"
                      iconPosition="left"
                      onClick={onWhatsAppClick}
                      className="flex-1 whatsapp-pulse"
                    >
                      Schedule Visit
                    </Button>
                  </div>
                </div>
              </div>

              {/* What to Expect */}
              <div className="card-brand">
                <h3 className="text-lg font-semibold text-foreground mb-4">What to Expect During Your Visit</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Icon name="Eye" size={16} className="text-brand-energy" />
                    <span className="text-sm text-foreground">See live printing demonstrations</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Palette" size={16} className="text-brand-energy" />
                    <span className="text-sm text-foreground">Browse material and color samples</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Users" size={16} className="text-brand-energy" />
                    <span className="text-sm text-foreground">Meet Papu and the team personally</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Lightbulb" size={16} className="text-brand-energy" />
                    <span className="text-sm text-foreground">Get design consultation and ideas</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Package" size={16} className="text-brand-energy" />
                    <span className="text-sm text-foreground">See completed projects and portfolio</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="card-brand p-0 overflow-hidden">
              <div className="aspect-video w-full">
                <iframe
                  width="100%"
                  height="100%"
                  loading="lazy"
                  title="PrintHub Pro Studio Location in Bhubaneswar"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=20.2961,85.8245&z=14&output=embed"
                  className="border-0"
                ></iframe>
              </div>
              
              <div className="p-4 bg-muted/50">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-foreground">Bhubaneswar, Odisha</div>
                    <div className="text-sm text-muted-foreground">Exact address shared on appointment</div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="ExternalLink"
                    iconPosition="right"
                    onClick={() => window.open('https://maps.google.com/?q=20.2961,85.8245', '_blank')}
                  >
                    Open in Maps
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Delivery Information */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="card-brand text-center">
              <Icon name="Truck" size={32} className="text-brand-energy mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Free Delivery</h3>
              <p className="text-sm text-muted-foreground">
                Free delivery within Bhubaneswar for orders above ₹500. 
                Same-day delivery available for urgent orders.
              </p>
            </div>
            <div className="card-brand text-center">
              <Icon name="Package" size={32} className="text-professional mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Pickup Available</h3>
              <p className="text-sm text-muted-foreground">
                Prefer to collect your order? Schedule a convenient pickup time 
                and save on delivery charges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationInfo;