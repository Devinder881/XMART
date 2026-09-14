import { useAuth } from "./AuthContext";
import { useState, useEffect, createContext, useContext } from "react";
import {
  getCart,
  addToCart as addToCartApi,
  removeCartItem,
  updateCartItem,
} from "../../Services/api";


const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setCartItems([]);
      setLoading(false);
      return;
    }

    const fetchCart = async () => {
      setLoading(true);
      try {
        const response = await getCart();
        setCartItems(response.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchCart();
  }, [user]);

  const addToCart = async (productId, quantity = 1) => {
    await addToCartApi(productId, quantity);
    const response = await getCart();
    setCartItems(response.data);
    
  };

  const increment = async (productId, currentQty) => {
    const response = await updateCartItem(productId, currentQty + 1);
    setCartItems((prev) =>
      prev.map((item) =>
        item._id === productId ? { ...item, quantity: response.data.item.quantity } : item,
      ),
    );
  };

  const decrement = async (productId, currentQty) => {
    if (currentQty <= 1) return;
    const response = await updateCartItem(productId, currentQty - 1);
    setCartItems((prev) =>
      prev.map((item) =>
        item._id === productId ? { ...item, quantity: response.data.item.quantity } : item,
      ),
    );
  };

  const removeItem = async (productId) => {
    await removeCartItem(productId);
    setCartItems((prev) => prev.filter((item) => item._id !== productId));
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        loading,
        addToCart,
        increment,
        decrement,
        removeItem,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);

