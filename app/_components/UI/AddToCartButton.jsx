import toast from "react-hot-toast";
import { useCart } from "../../_context/useCart";
import { IoBagHandleOutline } from "react-icons/io5";

function AddToCartButton({ product, setOpen, size }) {
  const { addToCart } = useCart();

  function handleAddToCart() {
    const newItem = {
      id: product.product_id,
      product_name: product.product_name,
      price: product.original_price,
      size,
      quantity: product.quantity || 1,
      image: product.image_filename || "/placeholder-image.jpg",
    };

    addToCart(newItem);
    toast.success(`${newItem.product_name} added to your cart`);
    setOpen();
  }

  return (
    <button
      type="button"
      onClick={handleAddToCart}
      className="flex items-center rounded-md bg-indigo-500 px-3 py-2 text-sm sm:text-md font-semibold text-white hover:bg-indigo-600 gap-2"
    >
      <span>
        <IoBagHandleOutline />
      </span>
      Add to Cart
    </button>
  );
}

export default AddToCartButton;
