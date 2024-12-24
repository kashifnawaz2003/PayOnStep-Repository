import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-bold text-gray-800">PayOnStep</h1>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="text-gray-600 hover:text-gray-900">
              <ShoppingCart className="h-6 w-6" />
            </Link>
            <Link to="/admin" className="text-gray-600 hover:text-gray-900">
              <User className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}