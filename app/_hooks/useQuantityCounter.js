import { useCart } from "../_context/useCart";

export function useQuantityCounter(minQty = 1, maxQty = 99) {
  const { qty, setQty } = useCart();

  function increment() {
    setQty((prev) => (prev < maxQty ? prev + 1 : prev));
  }

  function decrement() {
    setQty((prev) => (prev > minQty ? prev - 1 : prev));
  }

  return { qty, increment, decrement };
}
