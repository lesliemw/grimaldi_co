import OrderPriceSummary from "./OrderPriceSummary";
import CustomerDetails from "./CustomerDetails";
import CartOrderSummary from "./OrderSummary";

function SuccessfulOrderScreen() {
  return (
    <div className="py-14 mt-10 font-themeFont px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
      <div className="flex justify-start item-start space-y-2 flex-col">
        <h1 className="text-3xl  lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
          Order #13432
        </h1>
        <p className="text-base font-medium leading-6 text-gray-600">
          21st Mar 2024 at 10:34 PM
        </p>
      </div>
      <div className="mt-10 flex flex-col xl:flex-row justify-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
        <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
          <CartOrderSummary />
          <OrderPriceSummary />
        </div>
        <CustomerDetails />
      </div>
    </div>
  );
}

export default SuccessfulOrderScreen;
