
import { Minus, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart, CartItem as CartItemType } from "../context/CartContext";

interface CartItemProps {
  item: CartItemType;
}

const CartItem = ({ item }: CartItemProps) => {
  const { dispatch } = useCart();

  const updateQuantity = (newQuantity: number) => {
    if (newQuantity < 0) return;
    dispatch({ 
      type: 'UPDATE_QUANTITY', 
      productId: item.id, 
      quantity: newQuantity 
    });
  };

  const removeItem = () => {
    dispatch({ type: 'REMOVE_FROM_CART', productId: item.id });
  };

  return (
    <div className="flex items-center space-x-4 py-4">
      <img
        src={item.image}
        alt={item.name}
        className="w-16 h-16 object-cover rounded-lg"
      />
      
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-medium text-gray-900 truncate">
          {item.name}
        </h4>
        <p className="text-sm text-gray-500 capitalize">{item.category}</p>
        <p className="text-sm font-medium text-blue-600">
          ${item.price.toFixed(2)}
        </p>
      </div>

      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8"
          onClick={() => updateQuantity(item.quantity - 1)}
        >
          <Minus className="h-3 w-3" />
        </Button>
        
        <span className="w-8 text-center text-sm font-medium">
          {item.quantity}
        </span>
        
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8"
          onClick={() => updateQuantity(item.quantity + 1)}
        >
          <Plus className="h-3 w-3" />
        </Button>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 text-gray-400 hover:text-red-500"
        onClick={removeItem}
      >
        <X className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default CartItem;
