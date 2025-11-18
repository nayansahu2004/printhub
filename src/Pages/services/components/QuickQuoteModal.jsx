import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const QuickQuoteModal = ({ isOpen, onClose, selectedService, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: selectedService?.title || '',
    quantity: '',
    description: '',
    urgency: 'normal'
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceOptions = [
    { value: 'Custom T-Shirt Printing', label: 'Custom T-Shirt Printing' },
    { value: 'Personalized Mugs', label: 'Personalized Mugs' },
    { value: 'Custom Keychains', label: 'Custom Keychains' },
    { value: 'Business Cards & Stationery', label: 'Business Cards & Stationery' },
    { value: 'Custom Phone Cases', label: 'Custom Phone Cases' },
    { value: 'Promotional Banners', label: 'Promotional Banners' },
    { value: 'Other', label: 'Other (Please specify)' }
  ];

  const quantityOptions = [
    { value: '1-10', label: '1-10 pieces' },
    { value: '11-25', label: '11-25 pieces' },
    { value: '26-50', label: '26-50 pieces' },
    { value: '51-100', label: '51-100 pieces' },
    { value: '100+', label: '100+ pieces' }
  ];

  const urgencyOptions = [
    { value: 'normal', label: 'Normal (3-5 days)' },
    { value: 'urgent', label: 'Urgent (1-2 days)' },
    { value: 'express', label: 'Express (Same day)' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors?.[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData?.name?.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData?.phone?.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/?.test(formData?.phone?.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!formData?.email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/?.test(formData?.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData?.service) {
      newErrors.service = 'Please select a service';
    }

    if (!formData?.quantity) {
      newErrors.quantity = 'Please select quantity range';
    }

    if (!formData?.description?.trim()) {
      newErrors.description = 'Please describe your requirements';
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Create WhatsApp message
      const message = `Hi Papu! I'd like to get a quote for:\n\n` +
        `Name: ${formData?.name}\n` +
        `Phone: ${formData?.phone}\n` +
        `Email: ${formData?.email}\n` +
        `Service: ${formData?.service}\n` +
        `Quantity: ${formData?.quantity}\n` +
        `Urgency: ${formData?.urgency}\n` +
        `Requirements: ${formData?.description}`;

      const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
      
      onSubmit(formData, whatsappUrl);
      onClose();
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: selectedService?.title || '',
        quantity: '',
        description: '',
        urgency: 'normal'
      });
    } catch (error) {
      console.error('Error submitting quote request:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card rounded-2xl shadow-neutral-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="text-xl font-semibold text-foreground">Get Quick Quote</h2>
            <p className="text-sm text-muted-foreground">
              Fill out the form below and we'll send you a detailed quote via WhatsApp
            </p>
          </div>
          
          <button
            onClick={onClose}
            className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-border transition-colors duration-200"
          >
            <Icon name="X" size={20} className="text-foreground" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-foreground">Contact Information</h3>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <Input
                label="Full Name"
                name="name"
                type="text"
                placeholder="Enter your name"
                value={formData?.name}
                onChange={handleInputChange}
                error={errors?.name}
                required
              />
              
              <Input
                label="Phone Number"
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={formData?.phone}
                onChange={handleInputChange}
                error={errors?.phone}
                required
              />
            </div>
            
            <Input
              label="Email Address"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData?.email}
              onChange={handleInputChange}
              error={errors?.email}
              required
            />
          </div>

          {/* Service Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-foreground">Service Requirements</h3>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <Select
                label="Service Type"
                options={serviceOptions}
                value={formData?.service}
                onChange={(value) => setFormData(prev => ({ ...prev, service: value }))}
                error={errors?.service}
                placeholder="Select a service"
                required
              />
              
              <Select
                label="Quantity Range"
                options={quantityOptions}
                value={formData?.quantity}
                onChange={(value) => setFormData(prev => ({ ...prev, quantity: value }))}
                error={errors?.quantity}
                placeholder="Select quantity"
                required
              />
            </div>
            
            <Select
              label="Delivery Timeline"
              options={urgencyOptions}
              value={formData?.urgency}
              onChange={(value) => setFormData(prev => ({ ...prev, urgency: value }))}
              description="Express delivery may include additional charges"
            />
            
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Project Description *
              </label>
              <textarea
                name="description"
                rows={4}
                placeholder="Please describe your requirements, design ideas, colors, text, or any specific details..."
                value={formData?.description}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-brand-energy/20 focus:border-brand-energy transition-colors duration-200 ${
                  errors?.description ? 'border-error' : 'border-border'
                }`}
              />
              {errors?.description && (
                <p className="mt-1 text-sm text-error">{errors?.description}</p>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-border">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancel
            </Button>
            
            <Button
              type="submit"
              variant="default"
              loading={isSubmitting}
              iconName="MessageCircle"
              iconPosition="left"
              className="flex-1 bg-whatsapp hover:bg-whatsapp/90"
            >
              {isSubmitting ? 'Sending...' : 'Send via WhatsApp'}
            </Button>
          </div>
        </form>

        {/* Footer Note */}
        <div className="px-6 pb-6">
          <div className="bg-muted rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Icon name="Info" size={20} className="text-brand-energy flex-shrink-0 mt-0.5" />
              <div className="text-sm text-muted-foreground">
                <p className="font-medium text-foreground mb-1">What happens next?</p>
                <p>
                  Your quote request will be sent directly to our WhatsApp. We'll review your requirements and send you a detailed quote with pricing, timeline, and design options within 2-4 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickQuoteModal;