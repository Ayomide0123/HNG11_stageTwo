import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      // console.log("Initial load from localStorage:", JSON.parse(storedCart));
      return JSON.parse(storedCart);
    }
    // console.log("Initial load: no cart found in localStorage.");
    return [];
  });

  useEffect(() => {
    // console.log("Saving cart to localStorage:", cart);
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
                totalPrice: (item.quantity + 1) * item.price,
              }
            : item
        );
      } else {
        return [
          ...prevCart,
          { ...product, quantity: 1, totalPrice: product.price },
        ];
      }
    });
  };

  const updateCartItem = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity, totalPrice: quantity * item.price }
          : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateCartItem }}
    >
      {children}
    </CartContext.Provider>
  );
};
