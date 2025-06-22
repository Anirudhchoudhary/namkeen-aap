import React from 'react';
import { ShoppingCart, Store } from 'lucide-react';

interface HeaderProps {
  cartItemsCount: number;
  onCartToggle: () => void;
}

export const Header: React.FC<HeaderProps> = ({ cartItemsCount, onCartToggle }) => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Store className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">ShopEasy</h1>
          </div>
          
          <button
            onClick={onCartToggle}
            className="relative p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors transform hover:scale-105"
          >
            <ShoppingCart className="w-6 h-6" />
            {cartItemsCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center animate-pulse">
                {cartItemsCount > 99 ? '99+' : cartItemsCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};