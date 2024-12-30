function OrderPriceSummary() {
  return (
    <div className="flex justify-center flex-col md:flex-row items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
      <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50  space-y-6">
        <h3 className="text-xl font-semibold leading-5 text-gray-800">
          Summary
        </h3>
        <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
          <div className="flex justify-between w-full">
            <p className="text-base  leading-4 text-gray-800">Subtotal</p>
            <p className="text-base  leading-4 text-gray-600">
              {/* € {formattedSum} */}
            </p>
          </div>
          <div className="flex justify-between items-center w-full">
            <p className="text-base  leading-4 text-gray-800">
              Discount{" "}
              <span className="bg-gray-200 p-1 text-xs font-medium  leading-3 text-gray-800">
                VIP Member
              </span>
            </p>
            <p className="text-base  leading-4 text-gray-600">
              {/* - €{formattedDiscount} (-10%) */}
            </p>
          </div>
          <div className="flex justify-between items-center w-full">
            <p className="text-base  leading-4 text-gray-800">Shipping</p>
            <p className="text-base  leading-4 text-gray-600">
              {/* € {formattedShipping} */}
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
          <p className="text-base  font-semibold leading-4 text-gray-800">
            Total
          </p>
          <p className="text-base  font-semibold leading-4 text-gray-600">
            {/* €{(shipping + (formattedSum - formattedDiscount)).toFixed(2)} */}
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6">
        <h3 className="text-xl  font-semibold leading-5 text-gray-800">
          Shipping
        </h3>
        <div className="flex justify-between items-start w-full">
          <div className="flex justify-center items-center space-x-4">
            <div className="w-8 h-8">
              <img
                className="w-full h-full"
                alt="logo"
                src="https://i.ibb.co/L8KSdNQ/image-3.png"
              />
            </div>
            <div className="flex flex-col justify-start items-center">
              <p className="text-lg leading-6  font-semibold text-gray-800">
                DPD Delivery
                <br />
                <span className="font-normal">Delivery with 48 Hours</span>
              </p>
            </div>
          </div>
          <p className="text-lg font-semibold leading-6  text-gray-800">€ 8</p>
        </div>
        <div className="w-full flex justify-center items-center">
          <button className="hover:bg-black  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 md:w-full bg-gray-800 text-base font-medium leading-4 rounded text-white">
            View Carrier Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderPriceSummary;
