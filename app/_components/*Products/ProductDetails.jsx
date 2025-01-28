"use client";

import Image from "next/image";
import AddToCartButton from "../UI/AddToCartButton";
import HeartButton from "../UI/HeartButton";
import QuantityCounter from "../UI/QuantityCounter";
import { ProductDetailsAccordion } from "../UI/ProductCardAccordion";
import { useState } from "react";

function ProductDetails({ product }) {
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");

  if (!product) return <p>No product data available.</p>;

  const price = product.sale_price || product.original_price || 0;

  function handleIncrement() {
    setQty(qty + 1);
  }

  function handleDecrement() {
    if (qty > 1) setQty(qty - 1);
  }

  function handleSizeChange(event) {
    setSize(event.target.value);
  }

  return (
    <section className="text-gray-700 mt-10 font-themeFont overflow-hidden bg-white">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2">
            <Image
              alt={product.product_name}
              src={product.image_filename || "/default-image.png"}
              width={500}
              height={500}
              className="rounded object-cover object-center"
              loading="lazy"
            />
          </div>
          <div className="w-full lg:w-1/2 pl-8">
            <h2 className="text-sm text-gray-500">
              {product.product_category_name || "No Category"}
            </h2>
            <h1 className="text-3xl font-bold">{product.product_name}</h1>
            <p className="mt-4">{product.product_description}</p>
            <div className="flex gap-4">
              {!product.size_name === null && (
                <div className="mt-6">
                  <span className="mr-3">Size</span>
                  <select
                    className="rounded border py-2 pl-3 pr-10"
                    value={size}
                    onChange={handleSizeChange}
                  >
                    {product.size_name?.map((item, i) => (
                      <option key={i} defaultValue={item.size_name}>
                        {item.size_name}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div className="mt-6">
                <QuantityCounter
                  handleIncrement={handleIncrement}
                  handleDecrement={handleDecrement}
                  qty={qty}
                />
              </div>
            </div>
            <div className="flex justify-between items-center mt-6">
              <span className="text-2xl font-bold">€ {price}</span>
              <div className="flex gap-4">
                <HeartButton />
                <AddToCartButton product={product} />
              </div>
            </div>
            <div className="mt-8">
              <ProductDetailsAccordion
                care_instructions={product.care_instructions}
                about={product.about}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
