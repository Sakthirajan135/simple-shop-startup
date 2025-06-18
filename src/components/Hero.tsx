
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold mb-6">
          Discover Amazing Products
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Shop the latest trends and find everything you need in one place. 
          Quality products, competitive prices, and fast delivery.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
            Shop Now
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
