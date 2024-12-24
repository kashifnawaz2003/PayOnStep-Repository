import React, { useEffect, useState } from 'react';
import { ProductCard } from '../components/ProductCard';
import { supabase } from '../lib/supabase';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

export function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    const { data } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (data) {
      setProducts(data);
    }
  }

  const handleAddToCart = (productId: string) => {
    // TODO: Implement cart functionality
    console.log('Adding to cart:', productId);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}