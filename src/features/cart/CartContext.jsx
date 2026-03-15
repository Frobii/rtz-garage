import { createContext, useContext, useState, useMemo, useEffect } from "react";
import PropTypes from "prop-types";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  // Check if there are cart items in local storage
  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem("shopping_cart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Failed to load cart from cache,", error);
      return [];
    }
  });

  // When cartItems is updated, update localStorage
  useEffect(() => {
    try {
      localStorage.setItem("shopping_cart", JSON.stringify(cartItems));
    } catch (error) {
      console.error("Failed to persist cart:", error);
    }
  }, [cartItems]);

  const addItem = (product) => {
    // singleStockItem validation required here, don't want to block add to cart buttons after first click
    setCartItems((prev) => {
      const existing = prev.find((i) => i.product.id === product.id);
      if (existing) {
        if (existing.qtyInCart >= existing.product.availableStock) {
          return prev;
        }
        return prev.map((i) =>
          i.product.id === product.id
            ? { ...i, qtyInCart: i.qtyInCart + 1 }
            : i
        );
      }
      return [...prev, { product: product, qtyInCart: 1 }];
    });
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((i) => i.product.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    // singleStockItem validation not required here, control will be blocked
    const newQuantity = Math.max(1, Number(quantity));
    setCartItems((prev) =>
      prev.map((i) => {
        if (i.product.id === id) {
          const maxStock = i.product.availableStock;
          const finalQuantity = Math.min(newQuantity, maxStock);
          return {
            ...i,
            qtyInCart: finalQuantity
          };
        }
        return i;
      })
    );
  };

  const clearCart = () => setCartItems([]);

  const totalCartItems = useMemo(
    () => cartItems.reduce((sum, i) => sum + i.qtyInCart, 0),
    [cartItems]
  );

  const value = useMemo(
    () => ({
      cartItems,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      totalCartItems,
    }),
    [cartItems, totalCartItems]
  );

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === null) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
