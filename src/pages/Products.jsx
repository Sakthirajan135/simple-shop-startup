
import { useState } from "react";
import Header from "../components/Header";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";
import Cart from "../components/Cart";

const Products = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        onCartOpen={() => setIsCartOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">All Products</h1>
          <p className="text-gray-600">Browse our complete collection of products</p>
        </div>
        
        <ProductGrid 
          searchQuery={searchQuery}
          selectedCategory={selectedCategory}
        />
      </main>
      
      <Footer />
      
      <Cart 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </div>
  );
};

export default Products;
