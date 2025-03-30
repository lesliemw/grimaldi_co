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
      let itemUpdated = false;
      const updatedCart = prevCart.map((item) => {
        if (item.id === id && (!size || item.size === size)) {
          itemUpdated = true;
          return { ...item, quantity: Math.min(item.quantity + 1, 100) };
        }
        return item;
      });

      if (!itemUpdated) {
        return [
          ...updatedCart,
          { ...newItem, quantity: newItem.quantity || 1 },
        ];
      }

      return updatedCart;
    });
  }

  function decrementQuantity(id, size) {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.id === id && (!size || item.size === size)) {
            return { ...item, quantity: Math.max(item.quantity - 1, 1) }; // Prevent going below 1
          }
          return item;
        })
        .filter((item) => item.quantity > 0); // Remove if quantity is 0 (optional)
    });
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
