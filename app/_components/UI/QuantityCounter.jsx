import { useCart } from "../../_context/useCart";

function QuantityCounter({ qty }) {
  const { setQty } = useCart();

  const maxQty = 99;
  const minQty = 1;

  function increment() {
    setQty(qty < maxQty ? qty + 1 : qty);
  }

  function decrement() {
    setQty(qty > minQty ? qty - 1 : qty);
  }
  return (
    <div className="flex items-center ">
      <div className="w-auto px-4 md:w-1/6 lg:w-2/12 ">
        <div className="inline-flex items-center px-4 font-semibold text-gray-500 border  border-gray-200 rounded-md   ">
          <button className=" hover:text-gray-700 " onClick={decrement}>
            -
          </button>
          <input
            className="w-12 px-2 justify-center  text-center border-0 rounded-md bg-gray-50 py-1.5  "
            value={qty}
            readOnly
          />
          <button className=" hover:text-gray-700 " onClick={increment}>
            +
          </button>
        </div>

        <div className="flex justify-center">
          {/* <button
          type="button"
          className="font-medium text-indigo-500 hover:text-indigo-600"
        >
          Remove
        </button> */}
        </div>
      </div>
    </div>
  );
}

export default QuantityCounter;
