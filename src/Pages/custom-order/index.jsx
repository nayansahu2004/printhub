import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import OrderTypeSelector from './components/OrderTypeSelector';
import ProductSelector from './components/ProductSelector';
import DesignUploader from './components/DesignUploader';
import QuickOrderForm from './components/QuickOrderForm';
import OrderSummary from './components/OrderSummary';
import OrderHistory from './components/OrderHistory';

const CustomOrderPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [orderType, setOrderType] = useState('');
  const [orderDetails, setOrderDetails] = useState({
    product: null,
    design: null,
    quantity: 1,
    selectedColor: '',
    selectedSize: '',
    urgent: false,
    notes: ''
  });

  const steps = [
    { id: 1, name: 'Order Type', icon: 'ShoppingCart' },
    { id: 2, name: 'Product', icon: 'Package' },
    { id: 3, name: 'Design', icon: 'Palette' },
    { id: 4, name: 'Configure', icon: 'Settings' },
    { id: 5, name: 'Review', icon: 'CheckCircle' }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleTypeSelect = (type) => {
    setOrderType(type);
    if (type === 'reorder') {
      setCurrentStep(2); // Skip to order history
    } else {
      setCurrentStep(2);
    }
  };

  const handleProductSelect = (product) => {
    setOrderDetails(prev => ({ ...prev, product }));
    setCurrentStep(3);
  };

  const handleDesignUpload = (design) => {
    setOrderDetails(prev => ({ ...prev, design }));
    if (design) {
      setCurrentStep(4);
    }
  };

  const handleOrderUpdate = (updates) => {
    setOrderDetails(prev => ({ ...prev, ...updates }));
  };

  const handleReorder = (reorderData) => {
    setOrderDetails(reorderData);
    setOrderType('reorder');
    setCurrentStep(5);
  };

  const handleWhatsAppOrder = () => {
    const { product, design, quantity, selectedColor, selectedSize, urgent, notes } = orderDetails;
    
    let message = `Hi Papu! I'd like to place a custom order:\n\n`;
    message += `📦 Product: ${product?.name}\n`;
    message += `🎨 Design: ${design ? design?.name : 'No custom design'}\n`;
    message += `📊 Quantity: ${quantity}\n`;
    
    if (selectedColor) message += `🎨 Color: ${selectedColor}\n`;
    if (selectedSize) message += `📏 Size: ${selectedSize}\n`;
    if (urgent) message += `⚡ Urgent Processing: Yes (+₹100)\n`;
    
    const total = ((product?.price + (design ? 50 : 0)) * quantity) + (urgent ? 100 : 0);
    message += `💰 Total: ₹${total}\n`;
    
    if (notes) message += `📝 Notes: ${notes}\n`;
    
    message += `\nPlease confirm the order details and let me know the next steps!`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919876543210?text=${encodedMessage}`, '_blank');
  };

  const handleEditOrder = () => {
    setCurrentStep(4);
  };

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return orderType !== '';
      case 2:
        return orderDetails?.product !== null;
      case 3:
        return true; // Design is optional
      case 4:
        return orderDetails?.selectedColor && orderDetails?.selectedSize;
      default:
        return true;
    }
  };

  return (
    <>
      <Helmet>
        <title>Custom Order - PrintHub Pro | Your Vision, Our Craft</title>
        <meta name="description" content="Place your custom printing order with PrintHub Pro. Easy ordering process with real-time WhatsApp support, design upload, and instant quotes." />
        <meta name="keywords" content="custom order, printing services, t-shirt printing, mug printing, personalized gifts, custom design" />
      </Helmet>
      <div className="min-h-screen bg-canvas">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-20 lg:pt-24 pb-12 bg-gradient-brand">
          <div className="container-brand">
            <div className="text-center text-white">
              <h1 className="text-brand-hero mb-4">
                Create Your Custom Order
              </h1>
              <p className="text-xl font-body mb-8 max-w-2xl mx-auto">
                Bring your vision to life with our streamlined ordering process and real-time WhatsApp support
              </p>
              
              {/* Progress Steps */}
              <div className="flex items-center justify-center space-x-2 md:space-x-4 mb-8">
                {steps?.map((step, index) => (
                  <React.Fragment key={step?.id}>
                    <div className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                      currentStep >= step?.id
                        ? 'bg-white/20 text-white' :'bg-white/10 text-white/60'
                    }`}>
                      <Icon 
                        name={step?.icon} 
                        size={16} 
                        className={currentStep >= step?.id ? 'text-white' : 'text-white/60'} 
                      />
                      <span className="hidden md:block text-sm font-medium">
                        {step?.name}
                      </span>
                    </div>
                    {index < steps?.length - 1 && (
                      <Icon 
                        name="ChevronRight" 
                        size={16} 
                        className={currentStep > step?.id ? 'text-white' : 'text-white/40'} 
                      />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container-brand">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Order Flow */}
              <div className="lg:col-span-2 space-y-8">
                {/* Step 1: Order Type Selection */}
                {currentStep === 1 && (
                  <div className="bg-card border border-border rounded-lg p-6">
                    <h2 className="text-brand-title mb-6">
                      Choose Order Type
                    </h2>
                    <OrderTypeSelector
                      selectedType={orderType}
                      onTypeSelect={handleTypeSelect}
                    />
                  </div>
                )}

                {/* Step 2: Product Selection or Order History */}
                {currentStep === 2 && (
                  <div className="bg-card border border-border rounded-lg p-6">
                    {orderType === 'reorder' ? (
                      <OrderHistory onReorder={handleReorder} />
                    ) : (
                      <>
                        <h2 className="text-brand-title mb-6">
                          Select Product
                        </h2>
                        <ProductSelector
                          selectedProduct={orderDetails?.product}
                          onProductSelect={handleProductSelect}
                        />
                      </>
                    )}
                  </div>
                )}

                {/* Step 3: Design Upload */}
                {currentStep === 3 && (
                  <div className="bg-card border border-border rounded-lg p-6">
                    <h2 className="text-brand-title mb-6">
                      Add Your Design
                    </h2>
                    <DesignUploader
                      onDesignUpload={handleDesignUpload}
                      uploadedDesign={orderDetails?.design}
                    />
                  </div>
                )}

                {/* Step 4: Order Configuration */}
                {currentStep === 4 && (
                  <QuickOrderForm
                    orderDetails={orderDetails}
                    onUpdateOrder={handleOrderUpdate}
                  />
                )}

                {/* Step 5: Order Review */}
                {currentStep === 5 && (
                  <div className="bg-card border border-border rounded-lg p-6">
                    <h2 className="text-brand-title mb-6">
                      Order Complete!
                    </h2>
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon name="CheckCircle" size={32} className="text-success" />
                      </div>
                      <h3 className="text-xl font-headline font-semibold text-foreground mb-2">
                        Ready to Order!
                      </h3>
                      <p className="text-muted-foreground font-body mb-6">
                        Your order is configured and ready. Click below to send it via WhatsApp for confirmation.
                      </p>
                      <Button
                        variant="success"
                        size="lg"
                        onClick={handleWhatsAppOrder}
                        iconName="MessageCircle"
                        iconPosition="left"
                        className="whatsapp-pulse"
                      >
                        Send Order via WhatsApp
                      </Button>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                {currentStep < 5 && (
                  <div className="flex items-center justify-between">
                    <Button
                      variant="outline"
                      onClick={prevStep}
                      disabled={currentStep === 1}
                      iconName="ChevronLeft"
                      iconPosition="left"
                    >
                      Previous
                    </Button>
                    
                    <Button
                      variant="default"
                      onClick={nextStep}
                      disabled={!canProceed()}
                      iconName="ChevronRight"
                      iconPosition="right"
                    >
                      {currentStep === 4 ? 'Review Order' : 'Continue'}
                    </Button>
                  </div>
                )}
              </div>

              {/* Order Summary Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <OrderSummary
                    orderDetails={orderDetails}
                    onWhatsAppOrder={handleWhatsAppOrder}
                    onEditOrder={handleEditOrder}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Help Section */}
        <section className="py-12 bg-muted">
          <div className="container-brand">
            <div className="text-center mb-8">
              <h2 className="text-brand-title mb-4">
                Need Help with Your Order?
              </h2>
              <p className="text-muted-foreground font-body max-w-2xl mx-auto">
                Our team is here to help you every step of the way. Get instant support via WhatsApp or explore our resources.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-whatsapp/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="MessageCircle" size={24} className="text-whatsapp" />
                </div>
                <h3 className="font-headline font-semibold text-foreground mb-2">
                  WhatsApp Support
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get instant help with your order via WhatsApp
                </p>
                <Button
                  variant="success"
                  size="sm"
                  onClick={() => window.open('https://wa.me/919876543210?text=Hi%20Papu%2C%20I%20need%20help%20with%20my%20custom%20order', '_blank')}
                  iconName="MessageCircle"
                  iconPosition="left"
                >
                  Chat Now
                </Button>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-professional/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" size={24} className="text-professional" />
                </div>
                <h3 className="font-headline font-semibold text-foreground mb-2">
                  Call Us
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Speak directly with our printing experts
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open('tel:+919876543210', '_self')}
                  iconName="Phone"
                  iconPosition="left"
                >
                  +91 98765 43210
                </Button>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-brand-energy/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="HelpCircle" size={24} className="text-brand-energy" />
                </div>
                <h3 className="font-headline font-semibold text-foreground mb-2">
                  Order Guide
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Learn about our ordering process and tips
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  iconName="ExternalLink"
                  iconPosition="right"
                >
                  View Guide
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Floating WhatsApp Button */}
        <div className="fixed bottom-6 right-6 z-40">
          <Button
            variant="success"
            size="lg"
            onClick={() => window.open('https://wa.me/919876543210?text=Hi%20Papu%2C%20I%20need%20help%20with%20my%20custom%20order', '_blank')}
            iconName="MessageCircle"
            className="whatsapp-pulse shadow-brand-lg"
          />
        </div>

        {/* Footer */}
        <footer className="bg-foreground text-background py-8">
          <div className="container-brand">
            <div className="text-center">
              <p className="font-body">
                © {new Date()?.getFullYear()} PrintHub Pro. All rights reserved. | Your Vision, Our Craft
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default CustomOrderPage;