"use client";
import { createContext, useContext, useState } from "react";

// Create the Cart Context
const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Add item to cart
  const addToCart = (newItem) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (item) =>
          item.product_name === newItem.product_name &&
          item.size_name === newItem.size_name
      );

      if (existingItemIndex !== -1) {
        // If the item already exists, update the quantity
        return prevCart.map((item, index) => {
          if (index === existingItemIndex) {
            return {
              ...item,
              qty: item.qty + newItem.qty, // Update quantity
            };
          }
          return item;
        });
      } else {
        // Add new item to the cart
        return [...prevCart, newItem];
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (product_name, size_name) => {
    setCart((prevCart) =>
      prevCart.filter(
        (item) =>
          item.product_name !== product_name || item.size_name !== size_name
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
