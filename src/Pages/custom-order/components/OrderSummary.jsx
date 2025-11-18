import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const OrderSummary = ({ orderDetails, onWhatsAppOrder, onEditOrder }) => {
  const calculateTotal = () => {
    if (!orderDetails?.product) return 0;
    
    const basePrice = orderDetails?.product?.price;
    const quantity = orderDetails?.quantity || 1;
    const designFee = orderDetails?.design ? 50 : 0;
    const urgentFee = orderDetails?.urgent ? 100 : 0;
    
    return (basePrice + designFee) * quantity + urgentFee;
  };

  const getEstimatedDelivery = () => {
    const days = orderDetails?.urgent ? 2 : 5;
    const deliveryDate = new Date();
    deliveryDate?.setDate(deliveryDate?.getDate() + days);
    return deliveryDate?.toLocaleDateString('en-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (!orderDetails?.product) {
    return (
      <div className="bg-card border border-border rounded-lg p-6 text-center">
        <Icon name="ShoppingCart" size={48} className="text-muted-foreground mx-auto mb-4" />
        <h3 className="text-lg font-headline font-semibold text-foreground mb-2">
          No Product Selected
        </h3>
        <p className="text-muted-foreground font-body">
          Please select a product to see order summary
        </p>
      </div>
    );
  }

  const total = calculateTotal();

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-brand-energy text-brand-energy-foreground p-4">
        <h3 className="text-lg font-headline font-semibold flex items-center">
          <Icon name="FileText" size={20} className="mr-2" />
          Order Summary
        </h3>
      </div>
      {/* Order Details */}
      <div className="p-6 space-y-6">
        {/* Product Info */}
        <div className="flex items-start space-x-4">
          <img
            src={orderDetails?.product?.image}
            alt={orderDetails?.product?.alt}
            className="w-16 h-16 object-cover rounded-lg"
          />
          <div className="flex-1">
            <h4 className="font-headline font-semibold text-foreground">
              {orderDetails?.product?.name}
            </h4>
            <p className="text-sm text-muted-foreground">
              {orderDetails?.selectedColor && `Color: ${orderDetails?.selectedColor}`}
              {orderDetails?.selectedSize && ` • Size: ${orderDetails?.selectedSize}`}
            </p>
            <p className="text-brand-energy font-semibold">
              ₹{orderDetails?.product?.price} each
            </p>
          </div>
        </div>

        {/* Design Info */}
        {orderDetails?.design && (
          <div className="border-t border-border pt-4">
            <h5 className="font-headline font-medium text-foreground mb-2">
              Custom Design
            </h5>
            <div className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
              {orderDetails?.design?.preview && (
                <img
                  src={orderDetails?.design?.preview}
                  alt="Design preview"
                  className="w-12 h-12 object-cover rounded"
                />
              )}
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">
                  {orderDetails?.design?.name}
                </p>
                <p className="text-xs text-muted-foreground capitalize">
                  {orderDetails?.design?.type} design
                </p>
              </div>
              <span className="text-sm font-medium text-brand-energy">
                +₹50
              </span>
            </div>
          </div>
        )}

        {/* Quantity & Options */}
        <div className="border-t border-border pt-4 space-y-3">
          <div className="flex justify-between items-center">
            <span className="font-medium text-foreground">Quantity</span>
            <span className="text-foreground">{orderDetails?.quantity || 1}</span>
          </div>
          
          {orderDetails?.urgent && (
            <div className="flex justify-between items-center">
              <span className="font-medium text-foreground flex items-center">
                <Icon name="Zap" size={16} className="mr-1 text-warning" />
                Urgent Delivery
              </span>
              <span className="text-brand-energy font-medium">+₹100</span>
            </div>
          )}
        </div>

        {/* Price Breakdown */}
        <div className="border-t border-border pt-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">
              Product ({orderDetails?.quantity || 1}x)
            </span>
            <span className="text-foreground">
              ₹{orderDetails?.product?.price * (orderDetails?.quantity || 1)}
            </span>
          </div>
          
          {orderDetails?.design && (
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Design Fee</span>
              <span className="text-foreground">₹50</span>
            </div>
          )}
          
          {orderDetails?.urgent && (
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Urgent Processing</span>
              <span className="text-foreground">₹100</span>
            </div>
          )}
          
          <div className="border-t border-border pt-2 flex justify-between font-semibold text-lg">
            <span className="text-foreground">Total</span>
            <span className="text-brand-energy">₹{total}</span>
          </div>
        </div>

        {/* Delivery Info */}
        <div className="bg-muted rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Truck" size={16} className="text-brand-energy" />
            <span className="font-medium text-foreground">Estimated Delivery</span>
          </div>
          <p className="text-sm text-muted-foreground">
            {getEstimatedDelivery()}
          </p>
          {orderDetails?.urgent && (
            <p className="text-xs text-warning mt-1 flex items-center">
              <Icon name="Zap" size={12} className="mr-1" />
              Express processing selected
            </p>
          )}
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button
            variant="success"
            fullWidth
            onClick={onWhatsAppOrder}
            iconName="MessageCircle"
            iconPosition="left"
            className="whatsapp-pulse"
          >
            Order via WhatsApp
          </Button>
          
          <Button
            variant="outline"
            fullWidth
            onClick={onEditOrder}
            iconName="Edit"
            iconPosition="left"
          >
            Edit Order Details
          </Button>
        </div>

        {/* Order Notes */}
        <div className="text-xs text-muted-foreground space-y-1">
          <p>• Free delivery within city limits</p>
          <p>• 100% quality guarantee</p>
          <p>• Easy returns within 7 days</p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;