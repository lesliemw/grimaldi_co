"use client";
import React, { memo } from "react";
import CartHeader from "./cartScreen/CartHeader";
import CartOrderSummary from "./cartScreen/CartOrderSummary";
import CartProducts from "./cartScreen/CartProducts";
import { useCart } from "../../_context/useCart";
import QuantityCounter from "../UI/QuantityCounter";

// Memoize CartProducts to avoid unnecessary re-renders if the props don't change
const MemoizedCartProducts = memo(CartProducts);

function CartSummary() {
  const { cart } = useCart();

  // Early return if the cart is empty to reduce unnecessary renders
  if (cart.length === 0) {
    return (
      <section className="flex items-center mt-20 font-themeFont mb-9">
        <div className="justify-center flex-1 px-4 py-6 mx-auto max-w-7xl lg:py-4 md:px-6">
          <div className="p-8 bg-gray-50">
            <h2 className="mb-8 text-4xl font-bold">Your Cart</h2>
            <div className="h-full text-center mt-10">
              <h1>Nothing has been added to the cart 😥</h1>
              <p>
                Click the back button (or the logo at the top) to continue
                shopping.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="flex items-center mt-20 font-themeFont mb-9">
      <div className="justify-center flex-1 px-4 py-6 mx-auto max-w-7xl lg:py-4 md:px-6">
        <div className="p-8 bg-gray-50 ">
          <h2 className="mb-8 text-4xl font-bold ">Your Cart</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 pb-20 xl:w-8/12 xl:mb-0">
              <CartHeader />
              {cart.map((product) => (
                <MemoizedCartProducts
                  key={product.id}
                  id={product.id}
                  src={product.image}
                  alt={product.product_name}
                  name={product.product_name}
                  description={product.product_description}
                  price={product.price}
                  size={product.size}
                />
              ))}
              <div className="flex flex-wrap items-center gap-4 mt-8">
                <span className="text-gray-700 ">Apply Coupon</span>
                <input
                  type="text"
                  className="flex-1 px-8 py-2 font-normal placeholder-gray-300 border md:flex-none md:mr-6 rounded "
                  placeholder="x304k45"
                  required=""
                />
                <button className="flex-1 inline-block px-8 py-2 font-bold text-center text-gray-100 bg-indigo-500 hover:bg-indigo-600 rounded-md md:flex-none">
                  Apply
                </button>
              </div>
            </div>
            <CartOrderSummary />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CartSummary;
