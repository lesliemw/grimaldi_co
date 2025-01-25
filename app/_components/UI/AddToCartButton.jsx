// import { addToCart } from "@app/GlobalRedux/features/cart/cartSlice";
// import toast from "react-hot-toast";
import { IoBagHandleOutline } from "react-icons/io5";
// import { useDispatch } from "react-redux";

function AddToCartButton() {
  // const dispatch = useDispatch();

  // async function handleAddToCart() {
  //   try {
  //     dispatch(addToCart(product));
  //     toast.success(`${product.name} added to cart`);
  //   } catch (error) {
  //     if (error) {
  //       toast.error("Something has gone wrong. Please try again.");
  //       console.log(error);
  //     }
  //   }
  // }
  return (
    <button
      type="button"
      className=" flex items-center rounded-md bg-indigo-500 px-3 py-2 text-sm sm:text-md font-semibold text-white  hover:bg-indigo-600 gap-2"
    >
      <span>
        <IoBagHandleOutline />{" "}
      </span>{" "}
      Add to Cart
    </button>
  );
}

export default AddToCartButton;
