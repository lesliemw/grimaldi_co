"use client";
import { createContext, useContext, useState } from "react";

// Create the Cart Context
const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [qty, setQty] = useState(1);

  // Add an item to the cart
  function addToCart(newItem) {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (item) => item.id === newItem.id && item.size === newItem.size
      );

      if (existingItemIndex !== -1) {
        // If item with same ID & size exists, update quantity
        return prevCart.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        );
      } else {
        // Otherwise, add as a new item
        return [...prevCart, newItem];
      }
    });
  }

  // Remove an item from the cart
  function removeFromCart(id, size) {
    setCart((prevCart) =>
      prevCart.filter((item) => !(item.id === id && item.size === size))
    );
  }

  // // Update item quantity
  // function updateQuantity(id, size, qty) {
  //   setCart((prevCart) =>
  //     prevCart.map((item) =>
  //       item.id === id && item.size === size ? { ...item, qty } : item
  //     )
  //   );
  // }

  return (
    <CartContext.Provider
      value={{ cart, setCart, addToCart, removeFromCart, setQty, qty }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Custom Hook to use Cart Context
export function useCart() {
  return useContext(CartContext);
}
