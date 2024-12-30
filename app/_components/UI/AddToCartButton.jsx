import { IoBagHandleOutline } from "react-icons/io5";

function AddToCartButton() {
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
