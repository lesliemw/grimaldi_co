"use client";

import Image from "next/image";
import AddToCartButton from "../UI/AddToCartButton";
import HeartButton from "../UI/HeartButton";
import QuantityCounter from "../UI/QuantityCounter";
import { ProductDetailsAccordion } from "../UI/ProductCardAccordion";
import { useState } from "react";
import { useQuantityCounter } from "../../_hooks/useQuantityCounter";

function ProductDetails({ product }) {
  const [size, setSize] = useState();
  const { qty } = useQuantityCounter();

  if (!product) return <p>No product data available.</p>;

  const price = product.sale_price || product.original_price || 0;

  function handleSizeChange(event) {
    setSize(event.target.value);
  }

  return (
    <section className="text-gray-700 mt-10 font-themeFont overflow-hidden bg-white ">
      <div className="container px-5">
        <div className="md:flex  grid grid-cols-1">
          <div className="w-full  lg:w-1/2">
            <Image
              alt={product.product_name}
              src={product.image_filename || "/default-image.png"}
              width={500}
              height={500}
              className="rounded  object-center "
              loading="lazy"
            />
          </div>
          <div className="w-full lg:w-1/2 sm:pl-8 mt-4 sm:mt-0">
            <h2 className="text-sm text-gray-500 ">
              {product.product_category_name || "No Category"}
            </h2>
            <h1 className="text-3xl font-bold">{product.product_name}</h1>
            <p className="mt-4">{product.product_description}</p>
            <div className="sm:flex  sm:gap-4">
              <div className="mt-6 flex items-center">
                <span className="mr-3">Size</span>
                <select
                  className="rounded border py-1.5 px-3"
                  value={size}
                  onChange={handleSizeChange}
                >
                  <option value="" disabled>
                    Select Size
                  </option>{" "}
                  {product.size_name?.map((size, i) => (
                    <option key={i} value={size}>
                      {size}{" "}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-6 ">
                <QuantityCounter />
              </div>
            </div>
            <div className="flex justify-between items-center mt-6">
              <span className="text-2xl font-bold">€ {price * qty}</span>
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
