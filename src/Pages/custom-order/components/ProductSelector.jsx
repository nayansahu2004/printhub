import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ProductSelector = ({ selectedProduct, onProductSelect }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
  { id: 'all', name: 'All Products', icon: 'Grid3X3' },
  { id: 'apparel', name: 'Apparel', icon: 'Shirt' },
  { id: 'accessories', name: 'Accessories', icon: 'Watch' },
  { id: 'home', name: 'Home & Office', icon: 'Home' },
  { id: 'gifts', name: 'Gifts', icon: 'Gift' }];


  const products = [
  {
    id: 'tshirt',
    name: 'Custom T-Shirt',
    category: 'apparel',
    price: 299,
    image: "https://images.unsplash.com/photo-1605760719369-be714c32a7f6",
    alt: 'White cotton t-shirt on wooden hanger against neutral background',
    description: 'Premium cotton t-shirt with custom printing',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Black', 'Navy', 'Red', 'Green']
  },
  {
    id: 'hoodie',
    name: 'Custom Hoodie',
    category: 'apparel',
    price: 799,
    image: "https://images.unsplash.com/photo-1560777586-d1a7a1685692",
    alt: 'Gray pullover hoodie with front pocket displayed on mannequin',
    description: 'Comfortable hoodie with custom design options',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Gray', 'Black', 'Navy', 'Maroon']
  },
  {
    id: 'mug',
    name: 'Custom Mug',
    category: 'home',
    price: 199,
    image: "https://images.unsplash.com/photo-1626894850381-264e99015a63",
    alt: 'White ceramic coffee mug with smooth finish on wooden surface',
    description: '11oz ceramic mug perfect for personalization',
    sizes: ['11oz', '15oz'],
    colors: ['White', 'Black', 'Blue', 'Red']
  },
  {
    id: 'cap',
    name: 'Custom Cap',
    category: 'accessories',
    price: 399,
    image: "https://images.unsplash.com/photo-1663280419473-f650ee0fd0b9",
    alt: 'Black baseball cap with curved brim on white background',
    description: 'Adjustable cap with embroidery options',
    sizes: ['One Size'],
    colors: ['Black', 'White', 'Navy', 'Red', 'Gray']
  },
  {
    id: 'keychain',
    name: 'Custom Keychain',
    category: 'accessories',
    price: 99,
    image: "https://images.unsplash.com/photo-1433777624336-70a876202733",
    alt: 'Metal keychain with ring attachment on wooden table surface',
    description: 'Durable keychain with custom engraving',
    sizes: ['Standard'],
    colors: ['Silver', 'Gold', 'Black']
  },
  {
    id: 'notebook',
    name: 'Custom Notebook',
    category: 'home',
    price: 249,
    image: "https://images.unsplash.com/photo-1679119790850-161688b0417e",
    alt: 'Spiral-bound notebook with blank cover and pen beside it',
    description: 'A5 notebook with custom cover design',
    sizes: ['A5', 'A4'],
    colors: ['White', 'Cream', 'Black']
  }];


  const filteredProducts = selectedCategory === 'all' ?
  products :
  products?.filter((product) => product?.category === selectedCategory);

  return (
    <div className="space-y-6">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories?.map((category) =>
        <button
          key={category?.id}
          onClick={() => setSelectedCategory(category?.id)}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
          selectedCategory === category?.id ?
          'bg-brand-energy text-brand-energy-foreground shadow-brand' :
          'bg-muted text-muted-foreground hover:bg-brand-energy/10 hover:text-brand-energy'}`
          }>

            <Icon name={category?.icon} size={16} />
            <span className="font-headline">{category?.name}</span>
          </button>
        )}
      </div>
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts?.map((product) =>
        <div
          key={product?.id}
          onClick={() => onProductSelect(product)}
          className={`bg-card border rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-brand group ${
          selectedProduct?.id === product?.id ?
          'border-brand-energy shadow-brand' :
          'border-border hover:border-brand-energy/50'}`
          }>

            <div className="aspect-square overflow-hidden">
              <Image
              src={product?.image}
              alt={product?.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />

            </div>
            <div className="p-4">
              <h3 className="font-headline font-semibold text-foreground mb-1">
                {product?.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-2 font-body">
                {product?.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-brand-energy">
                  ₹{product?.price}
                </span>
                <div className="flex items-center space-x-1">
                  <Icon name="Palette" size={14} className="text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">
                    {product?.colors?.length} colors
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>);

};

export default ProductSelector;