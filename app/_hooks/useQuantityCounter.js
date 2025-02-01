import { useState } from "react";

export function useQuantityCounter(initialQty = 1, minQty = 1, maxQty = 99) {
  const [qty, setQty] = useState(initialQty);

  function increment() {
    setQty((prev) => (prev < maxQty ? prev + 1 : prev));
  }

  function decrement() {
    setQty((prev) => (prev > minQty ? prev - 1 : prev));
  }

  return { qty, increment, decrement };
}
