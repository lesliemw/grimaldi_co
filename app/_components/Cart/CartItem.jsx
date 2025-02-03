import { memo } from "react";
import Image from "next/image";
import { useCart } from "../../_context/useCart";

const CartItem = memo(function CartItem({ item }) {
  const { removeFromCart } = useCart();

  function handleRemove() {
    removeFromCart(item.id, item.size);
  }

  const imageSrc = item.image || "/placeholder-image.jpg";

  return (
    <li className="flex py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <Image
          src={imageSrc}
          alt={item.name}
          height={500}
          width={500}
          className="h-full w-full object-cover object-center"
          loading="lazy"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <h3>{item.name}</h3>
          <p className="ml-4">€ {item.price}</p>
        </div>

        <div className="flex flex-1 items-end justify-between text-sm">
          <div>
            <p className="text-gray-500">Size: {item.size}</p>
            <p className="text-gray-500">Qty: {item.quantity}</p>
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
