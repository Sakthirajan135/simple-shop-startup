
import { useState, useMemo } from "react";
import ProductCard from "./ProductCard";
import { Product } from "../context/CartContext";

// Mock product data
const mockProducts: Product[] = [
  {
    id: "1",
    name: "Wireless Headphones",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    category: "electronics",
    description: "High-quality wireless headphones with noise cancellation"
  },
  {
    id: "2",
    name: "Smart Watch",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    category: "electronics",
    description: "Advanced smartwatch with health monitoring features"
  },
  {
    id: "3",
    name: "Cotton T-Shirt",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
    category: "clothing",
    description: "Comfortable 100% cotton t-shirt in various colors"
  },
  {
    id: "4",
    name: "Programming Book",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500&h=500&fit=crop",
    category: "books",
    description: "Learn modern programming techniques and best practices"
  },
  {
    id: "5",
    name: "Coffee Maker",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&h=500&fit=crop",
    category: "home",
    description: "Automatic coffee maker with programmable settings"
  },
  {
    id: "6",
    name: "Bluetooth Speaker",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop",
    category: "electronics",
    description: "Portable Bluetooth speaker with excellent sound quality"
  },
  {
    id: "7",
    name: "Denim Jacket",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=500&h=500&fit=crop",
    category: "clothing",
    description: "Classic denim jacket perfect for any season"
  },
  {
    id: "8",
    name: "Plant Pot Set",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&h=500&fit=crop",
    category: "home",
    description: "Beautiful ceramic plant pots for your garden"
  }
];

interface ProductGridProps {
  searchQuery: string;
  selectedCategory: string;
}

const ProductGrid = ({ searchQuery, selectedCategory }: ProductGridProps) => {
  const filteredProducts = useMemo(() => {
    return mockProducts.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our carefully curated selection of high-quality products at competitive prices.
        </p>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-gray-600">
          Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
        </p>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-xl text-gray-500 mb-4">No products found</p>
          <p className="text-gray-400">Try adjusting your search criteria</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
