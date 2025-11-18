import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ContactForm = ({ onWhatsAppClick }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
    preferredContact: 'whatsapp'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const serviceOptions = [
    { value: 'custom-tshirts', label: 'Custom T-Shirts & Apparel' },
    { value: 'mugs-bottles', label: 'Mugs & Water Bottles' },
    { value: 'phone-cases', label: 'Phone Cases & Accessories' },
    { value: 'business-cards', label: 'Business Cards & Stationery' },
    { value: 'banners-signage', label: 'Banners & Signage' },
    { value: 'promotional-items', label: 'Promotional Items' },
    { value: 'photo-printing', label: 'Photo Printing & Frames' },
    { value: 'other', label: 'Other (Please specify in message)' }
  ];

  const projectTypeOptions = [
    { value: 'personal', label: 'Personal Use' },
    { value: 'business', label: 'Business/Corporate' },
    { value: 'event', label: 'Event/Wedding' },
    { value: 'gift', label: 'Gift/Special Occasion' },
    { value: 'bulk', label: 'Bulk Order' }
  ];

  const budgetOptions = [
    { value: 'under-1000', label: 'Under ₹1,000' },
    { value: '1000-5000', label: '₹1,000 - ₹5,000' },
    { value: '5000-10000', label: '₹5,000 - ₹10,000' },
    { value: '10000-25000', label: '₹10,000 - ₹25,000' },
    { value: 'above-25000', label: 'Above ₹25,000' },
    { value: 'discuss', label: 'Let\'s Discuss' }
  ];

  const timelineOptions = [
    { value: 'urgent', label: 'Urgent (1-2 days)' },
    { value: 'week', label: 'Within a week' },
    { value: 'two-weeks', label: '2-3 weeks' },
    { value: 'month', label: 'Within a month' },
    { value: 'flexible', label: 'Flexible timeline' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          projectType: '',
          budget: '',
          timeline: '',
          message: '',
          preferredContact: 'whatsapp'
        });
        setSubmitStatus(null);
      }, 3000);

    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppQuickStart = () => {
    const projectDetails = `Hi Papu! I'm interested in ${formData?.service || 'custom printing services'}. 
Project Type: ${formData?.projectType || 'Not specified'}
Budget: ${formData?.budget || 'To be discussed'}
Timeline: ${formData?.timeline || 'Flexible'}
${formData?.message ? `Additional Details: ${formData?.message}` : ''}

Can we discuss this project?`;
    
    const message = encodeURIComponent(projectDetails);
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container-brand">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-brand-md mb-12">
            <h2 className="text-brand-title">Tell Us About Your Project</h2>
            <p className="text-brand-body text-muted-foreground max-w-2xl mx-auto">
              Share your project details with us, and we'll get back to you with a personalized quote and timeline. 
              The more details you provide, the better we can help you.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card-brand">
                <form onSubmit={handleSubmit} className="space-brand-md">
                  {/* Personal Information */}
                  <div className="space-brand-sm">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Personal Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        label="Full Name"
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        value={formData?.name}
                        onChange={handleInputChange}
                        required
                      />
                      <Input
                        label="Email Address"
                        type="email"
                        name="email"
                        placeholder="your.email@example.com"
                        value={formData?.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <Input
                      label="Phone Number"
                      type="tel"
                      name="phone"
                      placeholder="+91 98765 43210"
                      value={formData?.phone}
                      onChange={handleInputChange}
                      description="We'll use this for WhatsApp communication"
                      required
                    />
                  </div>

                  {/* Project Details */}
                  <div className="space-brand-sm">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Project Details</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Select
                        label="Service Needed"
                        placeholder="Select a service"
                        options={serviceOptions}
                        value={formData?.service}
                        onChange={(value) => handleSelectChange('service', value)}
                        required
                      />
                      <Select
                        label="Project Type"
                        placeholder="Select project type"
                        options={projectTypeOptions}
                        value={formData?.projectType}
                        onChange={(value) => handleSelectChange('projectType', value)}
                        required
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Select
                        label="Budget Range"
                        placeholder="Select budget range"
                        options={budgetOptions}
                        value={formData?.budget}
                        onChange={(value) => handleSelectChange('budget', value)}
                      />
                      <Select
                        label="Timeline"
                        placeholder="Select timeline"
                        options={timelineOptions}
                        value={formData?.timeline}
                        onChange={(value) => handleSelectChange('timeline', value)}
                      />
                    </div>
                  </div>

                  {/* Project Description */}
                  <div className="space-brand-sm">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Project Description</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Describe Your Project
                        </label>
                        <textarea
                          name="message"
                          rows={4}
                          placeholder="Tell us about your vision, design ideas, quantity needed, special requirements, etc."
                          value={formData?.message}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-border">
                    <Button
                      type="submit"
                      variant="default"
                      size="lg"
                      iconName="Send"
                      iconPosition="left"
                      loading={isSubmitting}
                      disabled={isSubmitting}
                      className="flex-1"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Email Inquiry'}
                    </Button>
                    <Button
                      type="button"
                      variant="success"
                      size="lg"
                      iconName="MessageCircle"
                      iconPosition="left"
                      onClick={handleWhatsAppQuickStart}
                      className="flex-1 whatsapp-pulse"
                    >
                      Quick Start on WhatsApp
                    </Button>
                  </div>

                  {/* Submit Status */}
                  {submitStatus === 'success' && (
                    <div className="flex items-center space-x-2 text-success bg-success/10 px-4 py-3 rounded-lg">
                      <Icon name="CheckCircle" size={20} />
                      <span>Thank you! We'll get back to you within 2-4 hours.</span>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="flex items-center space-x-2 text-error bg-error/10 px-4 py-3 rounded-lg">
                      <Icon name="AlertCircle" size={20} />
                      <span>Something went wrong. Please try WhatsApp for immediate assistance.</span>
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Quick Info Sidebar */}
            <div className="space-y-6">
              {/* WhatsApp Quick Connect */}
              <div className="card-brand bg-success/5 border-success/20">
                <div className="text-center space-brand-sm">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-success text-success-foreground rounded-full mb-3">
                    <Icon name="MessageCircle" size={24} />
                  </div>
                  <h3 className="font-semibold text-foreground">Prefer WhatsApp?</h3>
                  <p className="text-sm text-muted-foreground">
                    Get instant responses and share images directly
                  </p>
                  <Button
                    variant="success"
                    size="sm"
                    iconName="MessageCircle"
                    iconPosition="left"
                    onClick={onWhatsAppClick}
                    className="w-full mt-3 whatsapp-pulse"
                  >
                    Chat on WhatsApp
                  </Button>
                </div>
              </div>

              {/* Business Hours */}
              <div className="card-brand">
                <h3 className="font-semibold text-foreground mb-3 flex items-center space-x-2">
                  <Icon name="Clock" size={18} />
                  <span>Business Hours</span>
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="font-medium">10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-medium">WhatsApp Only</span>
                  </div>
                  <div className="pt-2 border-t border-border">
                    <div className="flex items-center space-x-2 text-success">
                      <Icon name="MessageCircle" size={14} />
                      <span className="text-xs">WhatsApp available 24/7</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Times */}
              <div className="card-brand">
                <h3 className="font-semibold text-foreground mb-3 flex items-center space-x-2">
                  <Icon name="Timer" size={18} />
                  <span>Response Times</span>
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-3">
                    <Icon name="MessageCircle" size={16} className="text-success" />
                    <div>
                      <div className="font-medium">WhatsApp</div>
                      <div className="text-muted-foreground">Within 5 minutes</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Mail" size={16} className="text-professional" />
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-muted-foreground">2-4 hours</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" size={16} className="text-accent" />
                    <div>
                      <div className="font-medium">Phone Call</div>
                      <div className="text-muted-foreground">Immediate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;