import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const QuickOrderForm = ({ orderDetails, onUpdateOrder }) => {
  const [formData, setFormData] = useState({
    quantity: orderDetails?.quantity || 1,
    selectedColor: orderDetails?.selectedColor || '',
    selectedSize: orderDetails?.selectedSize || '',
    urgent: orderDetails?.urgent || false,
    notes: orderDetails?.notes || ''
  });

  const quantityOptions = [
    { value: 1, label: '1 piece' },
    { value: 2, label: '2 pieces' },
    { value: 3, label: '3 pieces' },
    { value: 5, label: '5 pieces' },
    { value: 10, label: '10 pieces' },
    { value: 25, label: '25 pieces' },
    { value: 50, label: '50 pieces' },
    { value: 100, label: '100 pieces' }
  ];

  const handleInputChange = (field, value) => {
    const updatedData = { ...formData, [field]: value };
    setFormData(updatedData);
    onUpdateOrder(updatedData);
  };

  const getColorOptions = () => {
    if (!orderDetails?.product?.colors) return [];
    return orderDetails?.product?.colors?.map(color => ({
      value: color,
      label: color
    }));
  };

  const getSizeOptions = () => {
    if (!orderDetails?.product?.sizes) return [];
    return orderDetails?.product?.sizes?.map(size => ({
      value: size,
      label: size
    }));
  };

  if (!orderDetails?.product) {
    return (
      <div className="bg-card border border-border rounded-lg p-6 text-center">
        <Icon name="Settings" size={48} className="text-muted-foreground mx-auto mb-4" />
        <h3 className="text-lg font-headline font-semibold text-foreground mb-2">
          Select Product First
        </h3>
        <p className="text-muted-foreground font-body">
          Please select a product to configure your order
        </p>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-lg p-6 space-y-6">
      <div className="flex items-center space-x-2">
        <Icon name="Settings" size={20} className="text-brand-energy" />
        <h3 className="text-lg font-headline font-semibold text-foreground">
          Order Configuration
        </h3>
      </div>
      {/* Product Summary */}
      <div className="bg-muted rounded-lg p-4">
        <div className="flex items-center space-x-3">
          <img
            src={orderDetails?.product?.image}
            alt={orderDetails?.product?.alt}
            className="w-12 h-12 object-cover rounded-lg"
          />
          <div>
            <h4 className="font-headline font-semibold text-foreground">
              {orderDetails?.product?.name}
            </h4>
            <p className="text-sm text-brand-energy font-medium">
              ₹{orderDetails?.product?.price} per piece
            </p>
          </div>
        </div>
      </div>
      {/* Quantity Selection */}
      <div>
        <Select
          label="Quantity"
          description="Select the number of pieces you want to order"
          options={quantityOptions}
          value={formData?.quantity}
          onChange={(value) => handleInputChange('quantity', value)}
          className="mb-4"
        />
      </div>
      {/* Color Selection */}
      {orderDetails?.product?.colors && orderDetails?.product?.colors?.length > 0 && (
        <div>
          <Select
            label="Color"
            description="Choose your preferred color"
            options={getColorOptions()}
            value={formData?.selectedColor}
            onChange={(value) => handleInputChange('selectedColor', value)}
            placeholder="Select color"
            required
            className="mb-4"
          />
        </div>
      )}
      {/* Size Selection */}
      {orderDetails?.product?.sizes && orderDetails?.product?.sizes?.length > 0 && (
        <div>
          <Select
            label="Size"
            description="Choose your preferred size"
            options={getSizeOptions()}
            value={formData?.selectedSize}
            onChange={(value) => handleInputChange('selectedSize', value)}
            placeholder="Select size"
            required
            className="mb-4"
          />
        </div>
      )}
      {/* Urgent Processing */}
      <div className="flex items-start space-x-3 p-4 border border-border rounded-lg">
        <input
          type="checkbox"
          id="urgent"
          checked={formData?.urgent}
          onChange={(e) => handleInputChange('urgent', e?.target?.checked)}
          className="mt-1 w-4 h-4 text-brand-energy border-border rounded focus:ring-brand-energy"
        />
        <div className="flex-1">
          <label htmlFor="urgent" className="font-medium text-foreground cursor-pointer">
            Urgent Processing (+₹100)
          </label>
          <p className="text-sm text-muted-foreground mt-1">
            Get your order ready in 2 days instead of 5 days
          </p>
          <div className="flex items-center space-x-1 mt-2 text-xs text-warning">
            <Icon name="Zap" size={12} />
            <span>Express processing available</span>
          </div>
        </div>
      </div>
      {/* Special Instructions */}
      <div>
        <Input
          label="Special Instructions (Optional)"
          type="text"
          placeholder="Any special requirements or notes..."
          value={formData?.notes}
          onChange={(e) => handleInputChange('notes', e?.target?.value)}
          description="Let us know if you have any specific requirements"
        />
      </div>
      {/* Price Preview */}
      <div className="bg-brand-energy/5 border border-brand-energy/20 rounded-lg p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="font-medium text-foreground">Estimated Total</span>
          <span className="text-xl font-bold text-brand-energy">
            ₹{((orderDetails?.product?.price + (orderDetails?.design ? 50 : 0)) * formData?.quantity) + (formData?.urgent ? 100 : 0)}
          </span>
        </div>
        <div className="text-xs text-muted-foreground space-y-1">
          <div className="flex justify-between">
            <span>Product ({formData?.quantity}x ₹{orderDetails?.product?.price})</span>
            <span>₹{orderDetails?.product?.price * formData?.quantity}</span>
          </div>
          {orderDetails?.design && (
            <div className="flex justify-between">
              <span>Design Fee</span>
              <span>₹50</span>
            </div>
          )}
          {formData?.urgent && (
            <div className="flex justify-between">
              <span>Urgent Processing</span>
              <span>₹100</span>
            </div>
          )}
        </div>
      </div>
      {/* Delivery Estimate */}
      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
        <Icon name="Truck" size={16} className="text-brand-energy" />
        <span>
          Estimated delivery: {formData?.urgent ? '2-3 days' : '5-7 days'} from order confirmation
        </span>
      </div>
    </div>
  );
};

export default QuickOrderForm;