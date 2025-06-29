import React from 'react';
import { ShoppingCart, Package } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const isOutOfStock = product.quantity === 0;
  const [Variety, setVariety] = React.useState(product.variety);
  const [selectedVariety, setSelectedVariety] = React.useState(Variety[0]);

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        {isOutOfStock && (
          <div className="absolute inset-0 bg-gray-900 bg-opacity-60 flex items-center justify-center">
            <span className="text-white font-semibold text-lg">Out of Stock</span>
          </div>
        )}
        <div className="absolute top-3 right-3 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
          {product.category}
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Package className="w-4 h-4 mr-2" />
            <span>Available: {product.quantity} units</span>
          </div>
          
          <div className="text-sm text-gray-600">
            <span className="font-medium">Varieties:</span> 
            <br />
            {product.variety.map((variety) => (
              <button className='border m-1 border-blue-300 rounded-md px-2 py-1 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500' key={variety.quantity} onClick={() => setSelectedVariety(variety)}>
                {variety.quantity}
              </button>
            ))}
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-blue-600">
            ₹ {selectedVariety.price}
          </span>
          
          <button
            onClick={() => onAddToCart(product)}
            disabled={isOutOfStock}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              isOutOfStock
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 text-white transform hover:scale-105 active:scale-95'
            }`}
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};