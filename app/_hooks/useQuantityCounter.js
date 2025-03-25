import { useCart } from "../_context/useCart";

export function useQuantityCounter(id, minQty = 1, maxQty = 99) {
  const { cart, incrementQuantity, decrementQuantity } = useCart();

  // Find the specific item in the cart
  const item = cart.find((product) => product.id === id);
  const qty = item ? item.quantity : 1;

  function increment() {
    if (qty < maxQty) incrementQuantity(id);
  }

  function decrement() {
    if (qty > minQty) decrementQuantity(id);
  }

  return { qty, increment, decrement };
}
