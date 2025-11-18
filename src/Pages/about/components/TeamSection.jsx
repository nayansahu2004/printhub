import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TeamSection = ({ onWhatsAppClick }) => {
  const teamMembers = [
  {
    id: 1,
    name: "Satya Prakash Subudhi (Papu)",
    role: "Founder & Creative Director",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f55ffadb-1763299556335.png",
    imageAlt: "Satya Prakash Subudhi (Papu), founder of PrintHub Pro, professional headshot with confident smile wearing casual business attire",
    bio: "With a passion for design and years of experience in printing technology, Papu founded PrintHub Pro to bridge the gap between creativity and craftsmanship. His vision drives every project we undertake.",
    expertise: ["Sublimation Printing", "Design Consultation", "Quality Control", "Customer Relations"],
    social: {
      whatsapp: "+919876543210",
      email: "papu@printhubpro.com"
    }
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Design Specialist",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_186617a2d-1763301883946.png",
    imageAlt: "Priya Sharma, design specialist at PrintHub Pro, professional woman with long dark hair smiling at camera in creative workspace",
    bio: "Priya brings artistic flair and technical expertise to every design project. Her attention to detail ensures that your vision is translated perfectly into the final product.",
    expertise: ["Graphic Design", "Color Matching", "Print Layout", "Creative Consultation"],
    social: {
      email: "priya@printhubpro.com"
    }
  },
  {
    id: 3,
    name: "Rahul Kumar",
    role: "Production Manager",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_175ea645a-1763293958593.png",
    imageAlt: "Rahul Kumar, production manager at PrintHub Pro, professional man with short black hair in blue shirt standing near printing equipment",
    bio: "Rahul oversees our production process, ensuring every item meets our high-quality standards. His technical knowledge and process optimization keep us running smoothly.",
    expertise: ["Production Planning", "Quality Assurance", "Equipment Maintenance", "Process Optimization"],
    social: {
      email: "rahul@printhubpro.com"
    }
  }];


  const achievements = [
  {
    icon: "Award",
    title: "Excellence in Quality",
    description: "Recognized for outstanding print quality and customer satisfaction"
  },
  {
    icon: "Users",
    title: "500+ Happy Customers",
    description: "Building trust one project at a time since September 2024"
  },
  {
    icon: "Clock",
    title: "Fast Turnaround",
    description: "Average delivery time of 3-5 business days without compromising quality"
  },
  {
    icon: "Shield",
    title: "Quality Guarantee",
    description: "100% satisfaction guarantee on all our products and services"
  }];


  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container-brand">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-brand-title text-foreground mb-4">Meet Our Team</h2>
          <p className="text-brand-body text-muted-foreground max-w-2xl mx-auto">
            Behind every great product is a passionate team. Get to know the people who bring your visions to life with expertise, creativity, and dedication.
          </p>
        </div>

        {/* Team Members */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers?.map((member) =>
          <div key={member?.id} className="card-brand text-center group hover:shadow-brand-lg">
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto overflow-hidden rounded-full">
                  <Image
                  src={member?.image}
                  alt={member?.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />

                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="bg-brand-energy text-white px-3 py-1 rounded-full text-xs font-medium">
                    {member?.role}
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-2">{member?.name}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{member?.bio}</p>

              {/* Expertise Tags */}
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {member?.expertise?.map((skill, index) =>
              <span
                key={index}
                className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs">

                    {skill}
                  </span>
              )}
              </div>

              {/* Contact Options */}
              <div className="flex justify-center space-x-3">
                {member?.social?.whatsapp &&
              <Button
                variant="success"
                size="sm"
                iconName="MessageCircle"
                onClick={onWhatsAppClick}
                className="whatsapp-pulse">

                    Chat
                  </Button>
              }
                <Button
                variant="outline"
                size="sm"
                iconName="Mail"
                onClick={() => window.open(`mailto:${member?.social?.email}`, '_blank')}>

                  Email
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Achievements */}
        <div className="bg-muted/30 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h2 className="text-brand-title text-foreground mb-4">Why Choose PrintHub Pro?</h2>
            <p className="text-brand-body text-muted-foreground max-w-2xl mx-auto">
              Our achievements speak for themselves, but it's our commitment to your satisfaction that truly sets us apart.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements?.map((achievement, index) =>
            <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-energy/10 rounded-lg mb-4">
                  <Icon name={achievement?.icon} size={24} className="text-brand-energy" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{achievement?.title}</h3>
                <p className="text-sm text-muted-foreground">{achievement?.description}</p>
              </div>
            )}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Start Your Project?</h2>
            <p className="text-brand-body text-muted-foreground mb-6">
              Our team is here to help bring your vision to life. Get in touch with us today and let's create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                iconName="MessageCircle"
                iconPosition="left"
                onClick={onWhatsAppClick}
                className="btn-whatsapp">

                Start Your Project
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Phone"
                iconPosition="left"
                onClick={() => window.open('tel:+919876543210', '_blank')}>

                Call Us Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default TeamSection;