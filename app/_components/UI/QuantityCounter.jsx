function QuantityCounter({ handleDecrement, handleIncrement, qty }) {
  return (
    <div className="w-auto h4 px-4 md:w-1/6 lg:w-2/12 ">
      <div className="inline-flex items-center px-4 font-semibold text-gray-500 border  border-gray-200 rounded-md   ">
        <button className="py-2 hover:text-gray-700 " onClick={handleDecrement}>
          -
        </button>
        <input
          className="w-12 px-2 justify-center  text-center border-0 rounded-md bg-gray-50 py-2  "
          defaultValue={qty}
        />
        <button className="py-2 hover:text-gray-700 " onClick={handleIncrement}>
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
  );
}

export default QuantityCounter;
