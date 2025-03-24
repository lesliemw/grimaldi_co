import { useCart } from "../../_context/useCart";
import { useState } from "react";

function QuantityCounter({ id }) {
  const { setCart, cart } = useCart() || {};
  const maxQty = 99;
  const minQty = 1;

  // Find the specific item in the cart
  const itemInCart = cart.find((cartItem) => cartItem.id === id);

  // Local state for quantity if item is not yet in cart
  const [localQty, setLocalQty] = useState(1);

  function increment() {
    if (itemInCart) {
      setCart((prevCart) =>
        prevCart.map((cartItem) =>
          cartItem.id === id
            ? { ...cartItem, quantity: Math.min(cartItem.quantity + 1, maxQty) }
            : cartItem
        )
      );
    } else {
      setLocalQty((prevQty) => Math.min(prevQty + 1, maxQty));
    }
  }

  function decrement() {
    if (itemInCart) {
      setCart((prevCart) =>
        prevCart.map((cartItem) =>
          cartItem.id === id
            ? { ...cartItem, quantity: Math.max(cartItem.quantity - 1, minQty) }
            : cartItem
        )
      );
    } else {
      setLocalQty((prevQty) => Math.max(prevQty - 1, minQty));
    }
  }

  return (
    <div className="flex items-center">
      <div className="w-auto px-4 md:w-1/6 lg:w-2/12">
        <div className="inline-flex items-center px-4 font-semibold text-gray-500 border border-gray-200 rounded-md">
          <button className="hover:text-gray-700" onClick={decrement}>
            -
          </button>
          <input
            className="w-12 px-2 text-center border-0 rounded-md bg-gray-50 py-1.5"
            value={itemInCart ? itemInCart.quantity : localQty} // Use localQty if not in cart
            readOnly
          />
          <button className="hover:text-gray-700" onClick={increment}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuantityCounter;
