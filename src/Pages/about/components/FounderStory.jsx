import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const FounderStory = () => {
  const milestones = [
  {
    date: "September 2024",
    title: "PrintHub Pro Founded",
    description: "Satya Prakash Subudhi (Papu) established PrintHub Pro with a vision to transform everyday items into meaningful, personalized treasures.",
    icon: "Rocket"
  },
  {
    date: "October 2024",
    title: "First 100 Customers",
    description: "Achieved our first milestone of 100 satisfied customers through word-of-mouth and exceptional quality.",
    icon: "Users"
  },
  {
    date: "November 2024",
    title: "Advanced Equipment",
    description: "Invested in state-of-the-art sublimation and printing equipment to enhance quality and expand service offerings.",
    icon: "Settings"
  },
  {
    date: "Present",
    title: "Growing Community",
    description: "Building a community of creative individuals who trust us to bring their unique visions to life.",
    icon: "Heart"
  }];


  return (
    <section id="founder-story" className="py-16 lg:py-24 bg-background">
      <div className="container-brand">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Story Content */}
          <div className="space-brand-lg">
            <div className="space-brand-md">
              <h2 className="text-brand-title text-foreground">
                From Vision to Reality
              </h2>
              <p className="text-brand-body text-muted-foreground">
                The story of PrintHub Pro began with a simple observation: in a world of mass production, people crave something uniquely theirs. Satya Prakash Subudhi, fondly known as Papu, recognized this need and decided to bridge the gap between imagination and reality.
              </p>
            </div>

            <div className="space-brand-md">
              <h3 className="text-brand-subtitle text-foreground mb-4">The Journey Begins</h3>
              <p className="text-brand-body text-muted-foreground mb-4">
                With a background in design and a passion for craftsmanship, Papu started PrintHub Pro in September 2024. What began as a small venture has quickly grown into a trusted name in custom printing and sublimation services.
              </p>
              <p className="text-brand-body text-muted-foreground">
                Our approach is simple yet powerful: we listen to your vision, understand your needs, and use our expertise to create something extraordinary. Every project is a collaboration between your creativity and our craftsmanship.
              </p>
            </div>

            <div className="bg-muted rounded-lg p-6">
              <blockquote className="text-lg italic text-foreground">
                "Every blank canvas tells a story waiting to be discovered. Our job is to help you tell yours."
              </blockquote>
              <cite className="block mt-3 text-sm text-muted-foreground">
                - Satya Prakash Subudhi (Papu), Founder
              </cite>
            </div>
          </div>

          {/* Behind the Scenes */}
          <div className="space-brand-lg">
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_14d96d753-1763379624590.png"
                  alt="Professional sublimation printing machine in operation with colorful fabric being processed"
                  className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300" />

              </div>
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_1ceab8eb1-1763379622897.png"
                  alt="Hands carefully arranging custom printed t-shirts showing attention to detail in quality control"
                  className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300" />

              </div>
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1518095995384-18c16dee3f19"
                  alt="Designer working on custom graphics at computer workstation with multiple design samples displayed"
                  className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300" />

              </div>
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_10101e834-1763379621913.png"
                  alt="Quality inspection of finished custom printed products with magnifying glass showing precision work"
                  className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300" />

              </div>
            </div>

            <div className="card-brand">
              <h3 className="text-brand-subtitle text-foreground mb-4">Our Craftsmanship Philosophy</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-success mt-0.5 flex-shrink-0" />
                  <span className="text-brand-body text-muted-foreground">Quality over quantity - every piece receives individual attention</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-success mt-0.5 flex-shrink-0" />
                  <span className="text-brand-body text-muted-foreground">Collaboration-first approach - your vision guides our process</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-success mt-0.5 flex-shrink-0" />
                  <span className="text-brand-body text-muted-foreground">Continuous innovation - staying ahead with latest techniques</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-success mt-0.5 flex-shrink-0" />
                  <span className="text-brand-body text-muted-foreground">Transparent process - you're involved every step of the way</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Company Milestones */}
        <div className="mt-16 lg:mt-24">
          <div className="text-center mb-12">
            <h2 className="text-brand-title text-foreground mb-4">Our Journey So Far</h2>
            <p className="text-brand-body text-muted-foreground max-w-2xl mx-auto">
              From our founding in September 2024 to today, every milestone represents our commitment to excellence and customer satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones?.map((milestone, index) =>
            <div key={index} className="card-brand text-center group hover:shadow-brand-lg">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-energy/10 rounded-lg mb-4 group-hover:bg-brand-energy group-hover:text-white transition-all duration-300">
                  <Icon name={milestone?.icon} size={24} />
                </div>
                <div className="text-sm font-medium text-brand-energy mb-2">{milestone?.date}</div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{milestone?.title}</h3>
                <p className="text-sm text-muted-foreground">{milestone?.description}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

};

export default FounderStory;