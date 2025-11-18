import React from 'react';
import Icon from '../../../components/AppIcon';

const StatsSection = () => {
  const stats = [
    {
      icon: 'Users',
      value: '500+',
      label: 'Happy Customers',
      description: 'Satisfied clients across India'
    },
    {
      icon: 'Package',
      value: '1,200+',
      label: 'Projects Completed',
      description: 'Custom designs delivered'
    },
    {
      icon: 'Star',
      value: '4.9',
      label: 'Average Rating',
      description: 'Based on customer reviews'
    },
    {
      icon: 'Clock',
      value: '24-48h',
      label: 'Delivery Time',
      description: 'Fast turnaround guaranteed'
    }
  ];

  return (
    <div className="bg-gradient-brand text-white py-16 mb-12 rounded-2xl">
      <div className="container-brand">
        <div className="text-center mb-12">
          <h2 className="text-brand-title text-white mb-4">
            Our Gallery by Numbers
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Every project in our gallery represents a story of creativity, quality, and customer satisfaction
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats?.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                <Icon name={stat?.icon} size={28} className="text-white" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">
                {stat?.value}
              </div>
              <div className="text-lg font-semibold mb-1">
                {stat?.label}
              </div>
              <div className="text-sm opacity-80">
                {stat?.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;