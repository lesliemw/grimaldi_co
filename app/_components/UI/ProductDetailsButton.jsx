import { BsPlusCircle } from "react-icons/bs";

function ProductDetailsButton() {
  return (
    <button
      type="button"
      className=" flex items-center rounded-md bg-indigo-500 px-3 py-2 text-sm sm:text-md font-semibold text-white  hover:bg-indigo-600 gap-2"
    >
      <BsPlusCircle />
      <span>See More Details</span>
    </button>
  );
}

export default ProductDetailsButton;
