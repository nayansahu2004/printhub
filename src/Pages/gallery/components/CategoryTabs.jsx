import React from 'react';
import Button from '../../../components/ui/Button';


const CategoryTabs = ({ activeCategory, setActiveCategory, categoryCounts }) => {
  const categories = [
    { id: 'all', name: 'All Work', icon: 'Grid3X3', count: categoryCounts?.all },
    { id: 'apparel', name: 'Custom Apparel', icon: 'Shirt', count: categoryCounts?.apparel },
    { id: 'mugs', name: 'Mugs & Drinkware', icon: 'Coffee', count: categoryCounts?.mugs },
    { id: 'bags', name: 'Bags & Accessories', icon: 'ShoppingBag', count: categoryCounts?.bags },
    { id: 'home-decor', name: 'Home Decor', icon: 'Home', count: categoryCounts?.homeDecor },
    { id: 'business', name: 'Business Materials', icon: 'Briefcase', count: categoryCounts?.business },
    { id: 'gifts', name: 'Personalized Gifts', icon: 'Gift', count: categoryCounts?.gifts }
  ];

  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
        {categories?.map((category) => (
          <Button
            key={category?.id}
            variant={activeCategory === category?.id ? 'default' : 'outline'}
            size="sm"
            iconName={category?.icon}
            iconPosition="left"
            onClick={() => setActiveCategory(category?.id)}
            className="flex items-center space-x-2"
          >
            <span>{category?.name}</span>
            <span className={`text-xs px-2 py-0.5 rounded-full ${
              activeCategory === category?.id 
                ? 'bg-brand-energy-foreground/20 text-brand-energy-foreground' 
                : 'bg-muted text-muted-foreground'
            }`}>
              {category?.count}
            </span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CategoryTabs;