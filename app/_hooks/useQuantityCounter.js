import { useState } from "react";
import { useCart } from "../_context/useCart";

export function useQuantityCounter(id, minQty = 1, maxQty = 99) {
  const {
    cart,
    incrementQuantity,
    decrementQuantity,
    tempQuantity,
    setTempQuantity,
  } = useCart();

  // Find the specific item in the cart
  const item = cart.find((product) => product.id === id);
  const qty = item ? item.quantity : tempQuantity;

  function increment() {
    if (item) {
      // If item is in cart, increment in cart
      if (qty < maxQty) incrementQuantity(id);
    } else {
      // If item is NOT in cart, update temp quantity
      if (tempQuantity < maxQty) setTempQuantity(tempQuantity + 1);
    }
  }

  function decrement() {
    if (item) {
      // If item is in cart, decrement in cart
      if (qty > minQty) decrementQuantity(id);
    } else {
      // If item is NOT in cart, update temp quantity
      if (tempQuantity > minQty) setTempQuantity(tempQuantity - 1);
    }
  }

  return { qty, increment, decrement };
}
