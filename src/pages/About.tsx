
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Cart from "../components/Cart";

const About = () => {
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
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">About ShopEase</h1>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
              <p className="text-gray-600 mb-6">
                ShopEase was founded with a simple mission: to make online shopping easy, 
                affordable, and enjoyable for everyone. We believe that quality products 
                should be accessible to all.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h2>
              <ul className="space-y-2 text-gray-600">
                <li>• Quality products at competitive prices</li>
                <li>• Fast and reliable shipping</li>
                <li>• Excellent customer service</li>
                <li>• Secure and easy checkout process</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Us</h3>
              <div className="space-y-3 text-gray-600">
                <p><strong>Email:</strong> support@shopease.com</p>
                <p><strong>Phone:</strong> (555) 123-4567</p>
                <p><strong>Address:</strong> 123 Commerce St, City, State 12345</p>
                <p><strong>Hours:</strong> Mon-Fri 9AM-6PM</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      
      <Cart 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </div>
  );
};

export default About;
