
import { useState } from "react";
import Header from "../components/Header";
import ProductGrid from "../components/ProductGrid";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Cart from "../components/Cart";

const Index = () => {
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
      
      <Hero />
      
      <main className="container mx-auto px-4 py-8">
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

export default Index;
