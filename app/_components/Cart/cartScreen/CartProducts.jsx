import Image from "next/image";
import QuantityCounter from "../../UI/QuantityCounter";

function CartProducts() {
  return (
    <div>
      <div className="flex  items-center mb-6 -mx-4 md:mb-8">
        <div className="w-full px-4 mb-6 md:w-4/6 lg:w-6/12 md:mb-0">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full px-4 mb-3 md:w-1/3">
              <div className="w-full h-96 md:h-24 md:w-24">
                <Image
                  src="/jacket.jpg"
                  alt=""
                  height={500}
                  width={500}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="w-2/3 px-4">
              <h2 className="mb-2 text-xl font-bold ">Jacket</h2>
              <p className="text-gray-500  ">Jacket</p>
            </div>
          </div>
        </div>
        <div className="hidden px-4 lg:block lg:w-2/12">
          <p className="text-lg font-bold text-indigo-500 ">€ 100</p>
        </div>
        <QuantityCounter />
        <div className="w-auto px-4 text-right md:w-1/6 lg:w-2/12 ">
          <p className="text-lg font-bold text-indigo-500 ">€ 100</p>
        </div>
      </div>
    </div>
  );
}

export default CartProducts;
