import React from 'react';
import Icon from '../../../components/AppIcon';

const OrderTypeSelector = ({ selectedType, onTypeSelect }) => {
  const orderTypes = [
    {
      id: 'new',
      title: 'New Custom Order',
      description: 'Start fresh with a completely new design',
      icon: 'Plus',
      color: 'bg-brand-energy',
      textColor: 'text-brand-energy-foreground'
    },
    {
      id: 'reorder',
      title: 'Reorder Previous',
      description: 'Quickly reorder from your order history',
      icon: 'RotateCcw',
      color: 'bg-professional',
      textColor: 'text-professional-foreground'
    },
    {
      id: 'template',
      title: 'Use Template',
      description: 'Choose from our pre-designed templates',
      icon: 'Layout',
      color: 'bg-secondary',
      textColor: 'text-secondary-foreground'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {orderTypes?.map((type) => (
        <button
          key={type?.id}
          onClick={() => onTypeSelect(type?.id)}
          className={`p-6 rounded-lg border-2 transition-all duration-300 text-left group hover:shadow-brand ${
            selectedType === type?.id
              ? 'border-brand-energy bg-brand-energy/5 shadow-brand'
              : 'border-border hover:border-brand-energy/50'
          }`}
        >
          <div className={`w-12 h-12 rounded-lg ${type?.color} ${type?.textColor} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300`}>
            <Icon name={type?.icon} size={24} />
          </div>
          <h3 className="text-lg font-headline font-semibold text-foreground mb-2">
            {type?.title}
          </h3>
          <p className="text-sm text-muted-foreground font-body">
            {type?.description}
          </p>
        </button>
      ))}
    </div>
  );
};

export default OrderTypeSelector;