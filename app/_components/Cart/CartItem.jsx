import { memo } from "react";
import Image from "next/image";
import { useCart } from "../../_context/useCart";

const CartItem = memo(function CartItem({ item }) {
  const { removeFromCart } = useCart();
  const { id, product_name, image, price, size, quantity } = item;

  function handleRemove() {
    removeFromCart(id, size);
  }

  const imageSrc = image || "/icon.jpg";

  return (
    <li className="flex py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <Image
          src={imageSrc}
          alt={product_name}
          height={500}
          width={500}
          className="h-full w-full object-cover object-center"
          loading="lazy"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <h3>{product_name}</h3>
          <p className="ml-4">€ {price}</p>
        </div>

        <div className="flex flex-1 items-end justify-between text-sm">
          <div>
            <p className="text-gray-500">Size: {size}</p>
            <p className="text-gray-500">Qty: {quantity}</p>
          </div>

          <div className="flex">
            <button
              type="button"
              onClick={handleRemove}
              className="font-medium text-indigo-500 hover:text-indigo-600"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
});

export default CartItem;
