import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FAQ = ({ onWhatsAppClick }) => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqData = [
    {
      id: 1,
      question: "How quickly can you complete my custom printing order?",
      answer: `Our standard turnaround time is 2-3 business days for most custom printing projects. However, we understand that sometimes you need things faster!\n\nUrgent orders (24-48 hours): Available for an additional rush fee\nStandard orders (2-3 days): Most t-shirts, mugs, phone cases\nBulk orders (5-7 days): Large quantities or complex designs\nSpecial projects (7-14 days): Unique items requiring special materials\n\nFor the most accurate timeline for your specific project, just WhatsApp us with your requirements!`
    },
    {
      id: 2,
      question: "What file formats do you accept for custom designs?",
      answer: `We accept a wide variety of file formats to make it easy for you:\n\nHigh Resolution Images: PNG, JPG, JPEG (300 DPI preferred)\nVector Files: AI, EPS, SVG, PDF (best for logos and text)\nDesign Files: PSD, CDR, INDD\nBasic Formats: Even WhatsApp images work for simple designs!\n\nDon't have a design file? No problem! We can:\n• Work with photos from your phone\n• Create designs from your ideas\n• Enhance low-quality images\n• Convert text descriptions into designs\n\nJust send us what you have, and we'll make it work!`
    },
    {
      id: 3,
      question: "Do you offer design services if I only have an idea?",
      answer: `Absolutely! We love bringing ideas to life. Our design services include:\n\nFree Basic Design: Simple text layouts and basic graphics\nCustom Design Creation: ₹200-₹500 depending on complexity\nLogo Design: Starting from ₹800 for complete logo packages\nComplete Branding: Business cards, letterheads, and more\n\nOur design process:\n1. Share your idea via WhatsApp\n2. We create initial concepts\n3. You review and request changes\n4. We finalize the design\n5. Proceed with printing\n\nMost design work is completed within 24 hours. Let's chat about your vision!`
    },
    {
      id: 4,
      question: "What's your pricing structure for different quantities?",
      answer: `Our pricing is designed to be fair for both small and large orders:\n\nSingle Items: Perfect for personal gifts and samples\nSmall Batches (2-10): Great for families and small groups\nMedium Orders (11-50): Ideal for teams and events\nBulk Orders (50+): Best value with significant discounts\n\nPricing factors:\n• Type of product (t-shirts, mugs, etc.)\n• Printing method (digital, sublimation, vinyl)\n• Design complexity\n• Quantity ordered\n• Urgency of delivery\n\nFor exact pricing, WhatsApp us with your requirements. We'll send you a detailed quote within minutes!`
    },
    {
      id: 5,
      question: "Can I see a sample before placing a large order?",
      answer: `Yes! We highly recommend samples for large orders. Here's how it works:\n\nSample Options:\n• Physical sample: ₹100-₹300 (deducted from final order)\n• Digital mockup: Free for most designs\n• Visit our studio: See similar work in person\n\nSample Process:\n1. We create your design mockup\n2. You approve the digital version\n3. We print a physical sample\n4. You review quality and make changes\n5. Proceed with full order\n\nFor orders above ₹5,000, we often provide samples at no extra cost. This ensures you're 100% happy before we print everything!`
    },
    {
      id: 6,
      question: "What if I'm not satisfied with the final product?",answer: `Your satisfaction is our top priority! Here's our quality guarantee:\n\n100% Quality Guarantee:\n• Free reprints for any printing defects\n• Color matching guarantee\n• Design accuracy promise\n• Material quality assurance\n\nIf you're not satisfied:\n1. Contact us within 48 hours of delivery\n2. Share photos of the issue\n3. We'll either reprint or provide full refund\n4. No questions asked policy\n\nCommon solutions:\n• Reprint with corrections (most common)\n• Partial refund for minor issues\n• Full refund for major problems\n• Store credit for future orders\n\nWe've been doing this since September 2024 and customer satisfaction is why we're growing so fast!`
    }
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="py-16 lg:py-20 bg-canvas">
      <div className="container-brand">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-brand-md mb-12">
            <h2 className="text-brand-title">Frequently Asked Questions</h2>
            <p className="text-brand-body text-muted-foreground max-w-2xl mx-auto">
              Got questions? We've got answers! Here are the most common questions our customers ask. Can't find what you're looking for? Just WhatsApp us!
            </p>
          </div>

          <div className="space-y-4">
            {faqData?.map((faq) => (
              <div key={faq?.id} className="card-brand">
                <button
                  onClick={() => toggleFAQ(faq?.id)}
                  className="w-full flex items-center justify-between text-left p-0 bg-transparent border-0"
                >
                  <h3 className="text-lg font-semibold text-foreground pr-4">
                    {faq?.question}
                  </h3>
                  <Icon 
                    name={openFAQ === faq?.id ? "ChevronUp" : "ChevronDown"} 
                    size={20} 
                    className="text-muted-foreground flex-shrink-0 transition-transform duration-200"
                  />
                </button>
                
                {openFAQ === faq?.id && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="text-muted-foreground space-y-3">
                      {faq?.answer?.split('\n\n')?.map((paragraph, index) => (
                        <p key={index} className="text-sm leading-relaxed">
                          {paragraph?.split('\n')?.map((line, lineIndex) => (
                            <span key={lineIndex}>
                              {line}
                              {lineIndex < paragraph?.split('\n')?.length - 1 && <br />}
                            </span>
                          ))}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Still Have Questions CTA */}
          <div className="mt-12 text-center">
            <div className="card-brand bg-brand-energy/5 border-brand-energy/20">
              <div className="space-brand-sm">
                <Icon name="MessageCircle" size={32} className="text-brand-energy mx-auto" />
                <h3 className="text-xl font-semibold text-foreground">Still Have Questions?</h3>
                <p className="text-muted-foreground">
                  Can't find the answer you're looking for? Our team is here to help! 
                  Get instant answers on WhatsApp or send us an email.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button
                    variant="success"
                    iconName="MessageCircle"
                    iconPosition="left"
                    onClick={onWhatsAppClick}
                    className="whatsapp-pulse"
                  >
                    Ask on WhatsApp
                  </Button>
                  <Button
                    variant="outline"
                    iconName="Mail"
                    iconPosition="left"
                    onClick={() => window.open('mailto:hello@printhubpro.com?subject=Question about Custom Printing', '_self')}
                  >
                    Send Email
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;