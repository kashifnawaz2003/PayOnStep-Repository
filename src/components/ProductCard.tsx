import React from 'react';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  onAddToCart: (id: string) => void;
}

export function ProductCard({ id, name, price, image, onAddToCart }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-gray-600 mt-1">Rs. {price.toLocaleString()}</p>
        <button
          onClick={() => onAddToCart(id)}
          className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 flex items-center justify-center gap-2"
        >
          <ShoppingCart className="h-5 w-5" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}