"use client";
import { createContext, useContext, useState } from "react";

// Create the Cart Context
const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [tempQuantity, setTempQuantity] = useState(1);

  // Add an item to the cart
  function addToCart(newItem) {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (item) => item.id === newItem.id && item.size === newItem.size
      );

      if (existingItemIndex !== -1) {
        // Update quantity if item already exists
        return prevCart.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        );
      } else {
        // Ensure each new item has a unique key
        return [
          ...prevCart,
          {
            ...newItem,
            quantity: tempQuantity,
          },
        ];
      }
    });
    console.log(cart);

    // Reset temp quantity after adding
    setTempQuantity(1);
  }

  // Remove an item from the cart
  function removeFromCart(id, size) {
    setCart((prevCart) =>
      prevCart.filter((item) => !(item.id === id && item.size === size))
    );
  }

  function incrementQuantity(id, size, newItem) {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.id === id && item.size === size
      );

      if (existingItem) {
        // If item exists, increase quantity (max 100)
        return prevCart.map((item) =>
          item.id === id && item.size === size && item.quantity < 100
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If item does not exist, add it with the correct tempQuantity
        return [...prevCart, { ...newItem, quantity: tempQuantity }];
      }
    });
  }

  function decrementQuantity(id, size) {
    setCart(
      (prevCart) =>
        prevCart
          .map((item) =>
            item.id === id && item.size === size && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0) // Remove item if quantity reaches 0
    );
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
        tempQuantity,
        setTempQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Custom Hook to use Cart Context
export function useCart() {
  return useContext(CartContext);
}
