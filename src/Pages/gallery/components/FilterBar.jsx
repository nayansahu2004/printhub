import React from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Icon from '../../../components/AppIcon';

const FilterBar = ({ 
  searchTerm, 
  setSearchTerm, 
  selectedCategory, 
  setSelectedCategory, 
  sortBy, 
  setSortBy,
  viewMode,
  setViewMode 
}) => {
  const categoryOptions = [
    { value: 'all', label: 'All Categories' },
    { value: 'apparel', label: 'Custom Apparel' },
    { value: 'mugs', label: 'Mugs & Drinkware' },
    { value: 'bags', label: 'Bags & Accessories' },
    { value: 'home-decor', label: 'Home Decor' },
    { value: 'business', label: 'Business Materials' },
    { value: 'gifts', label: 'Personalized Gifts' }
  ];

  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'popular', label: 'Most Popular' }
  ];

  return (
    <div className="bg-card border border-border rounded-lg p-6 mb-8 shadow-neutral">
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-end">
        {/* Search Input */}
        <div className="flex-1 min-w-0">
          <Input
            type="search"
            placeholder="Search gallery items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e?.target?.value)}
            className="w-full"
          />
        </div>

        {/* Category Filter */}
        <div className="w-full lg:w-48">
          <Select
            options={categoryOptions}
            value={selectedCategory}
            onChange={setSelectedCategory}
            placeholder="Select category"
          />
        </div>

        {/* Sort Options */}
        <div className="w-full lg:w-48">
          <Select
            options={sortOptions}
            value={sortBy}
            onChange={setSortBy}
            placeholder="Sort by"
          />
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center space-x-2 bg-muted rounded-lg p-1">
          <Button
            variant={viewMode === 'grid' ? 'default' : 'ghost'}
            size="sm"
            iconName="Grid3X3"
            onClick={() => setViewMode('grid')}
            className="px-3"
          />
          <Button
            variant={viewMode === 'list' ? 'default' : 'ghost'}
            size="sm"
            iconName="List"
            onClick={() => setViewMode('list')}
            className="px-3"
          />
        </div>
      </div>
      {/* Active Filters Display */}
      {(searchTerm || selectedCategory !== 'all') && (
        <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-border">
          <span className="text-sm font-medium text-muted-foreground">Active filters:</span>
          
          {searchTerm && (
            <div className="flex items-center gap-1 bg-brand-energy/10 text-brand-energy px-3 py-1 rounded-full text-sm">
              <Icon name="Search" size={14} />
              <span>"{searchTerm}"</span>
              <Button
                variant="ghost"
                size="xs"
                iconName="X"
                onClick={() => setSearchTerm('')}
                className="h-4 w-4 p-0 ml-1"
              />
            </div>
          )}
          
          {selectedCategory !== 'all' && (
            <div className="flex items-center gap-1 bg-professional/10 text-professional px-3 py-1 rounded-full text-sm">
              <Icon name="Tag" size={14} />
              <span>{categoryOptions?.find(cat => cat?.value === selectedCategory)?.label}</span>
              <Button
                variant="ghost"
                size="xs"
                iconName="X"
                onClick={() => setSelectedCategory('all')}
                className="h-4 w-4 p-0 ml-1"
              />
            </div>
          )}
          
          <Button
            variant="ghost"
            size="sm"
            iconName="RotateCcw"
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
              setSortBy('newest');
            }}
            className="text-xs"
          >
            Clear All
          </Button>
        </div>
      )}
    </div>
  );
};

export default FilterBar;